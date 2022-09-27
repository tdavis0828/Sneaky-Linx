const router = require('express').Router();
const multer = require('multer');
const AWS = require('aws-sdk');
let User = require('../schemas/userSchema');
require('dotenv/config');

// creating the storage variable to upload the file and providing the destination folder,
// if nothing is provided in the callback it will get uploaded in main directory
const storage = multer.memoryStorage({
  destination: function (req, file, cb) {
    cb(null, '');
  },
});

// below variable is define to check the type of file which is uploaded
const fileFilter = (req, file, cb) => {
  if (
    fileFilter.mimetype === 'image/jpeg' ||
    fileFilter.mimetype === 'image/jpg'
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

// defining the upload variable for the configuration of photo being uploaded
const upload = multer({ storage: storage, fileFilter: fileFilter });

// Now creating the S3 instance which will be used in uploading photo to s3 bucket.
const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRECT_ACCESS_KEY,
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
  try {
    console.log(req.body);
    const {
      userId,
      firstName,
      lastName,
      gender,
      preference,
      username,
      email,
      password,
      birthday,
      smoker,
      drinker,
      interests,
      isLoggedIn,
    } = req.body;
    console.log('req.file: ', req.file);
    console.log('req.files: ', req.files);

    const params = {
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: req.body.originalname,
      Body: req.file.buffer,
      ACL: 'public-read-write',
      ContentType: 'image/jpeg',
    };
    s3.upload(params, async (error, data) => {
      if (error) {
        console.log('Error: ', error);
        return res.status(500).send({ err: error });
      }
      const newUser = new User({
        userId,
        firstName,
        lastName,
        images: data.Location,
        gender,
        preference,
        username,
        email,
        password,
        birthday,
        smoker,
        drinker,
        interests,
        isLoggedIn,
      });
      await newUser.save();
      res.json('New user added!');
      console.log(data);
    });
  } catch (err) {
    console.log(err.message);
    res.status(400).json(err.message);
  }
});

module.exports = router;
