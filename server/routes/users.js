const router = require('express').Router();
const multer = require('multer');
const AWS = require('aws-sdk');
let User = require('../schemas/userSchema');
require('dotenv/config');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
router.use(cors());

// creating the storage variable to upload the file and providing the destination folder,
// if nothing is provided in the callback it will get uploaded in main directory
const storage = multer.memoryStorage({
  destination: function (req, file, cb) {
    cb(null, '');
  },
});

// below variable is define to check the type of file which is uploaded
const fileFilter = (req, file, cb) => {
  const isValidType = ['image/jpeg', 'image/jpg', 'image/png'].includes(
    file.mimetype
  );
  cb(null, isValidType);
};

// defining the upload variable for the configuration of photo being uploaded
const upload = multer({ storage: storage, fileFilter: fileFilter });

// Now creating the S3 instance which will be used in uploading photo to s3 bucket.
const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

/* GET Routes */
// Route to get all users
router.route('/').get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  User.findById(req.params.id)
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json('Error: ' + err));
});

/* POST Routes*/
// Route for adding a new user
router.post('/addUser', upload.single('images'), async (req, res) => {
  // const encrypedPassword = await bcrypt.hash(password, 10);
  const currentUser = User.findOne({ email });
  if (currentUser) {
    res.send({ error: 'User already exists' });
  }
  try {
    const params = {
      Bucket: process.env.AWS_BUCKET_NAME, // bucket that we made earlier
      Key: `${Date.now()}-${req.file.originalname}`, // Name of the image
      Body: req.file.buffer, // Body which will contain the image in buffer format
      ContentType: 'image/jpeg', // Necessary to define the image content-type to view the photo in the browser with the link
    };
    s3.upload(params, async (error, data) => {
      if (error) {
        console.log('Error: ', error);
        return res.status(500).send({ err: error });
      }
      const newUser = new User({
        ...req.body,
        images: data.Location,
      });
      console.log('s3 data: ', data);
      await newUser.save();
      res.json('New user added');
    });
  } catch (err) {
    console.log(err.message);
    res.status(400).json(err.message);
  }
});

//Route for logging user in
router.post('/login', async (req, res) => {
  const user = await User.findOne({
    username: req.body.username,
    password: req.body.password,
  });
  console.log(user);
  if (user) {
    const token = jwt.sign(
      {
        username: user.username,
      },
      'secret123'
    );
    return res.json({ status: 'ok', user: true, data: token });
  } else {
    return res.json({ status: 'User not found', user: false });
  }
});

module.exports = router;
