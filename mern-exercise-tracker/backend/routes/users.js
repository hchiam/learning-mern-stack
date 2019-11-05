const router = require('express').Router(); // eslint-disable-line new-cap
const User = require('../models/user.model');

router.route('/').get((req, res) => {
  User.find() // no filters: find all users
      .then((users) => res.json(users)) // return it as JSON
      .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;

  const newUser = new User({username});

  newUser.save()
      .then(() => res.json('User added!'))
      .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;
