const router = require('express').Router();
let User = require('../schemas/userSchema');

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
router.post('/addUser', async (req, res) => {
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
    } = req.body;
    const newUser = new User({
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
    });
    await newUser.save();
    res.json('New user added!');
  } catch (err) {
    console.log(err.message);
    res.status(400).json(err.message);
  }
});

module.exports = router;
