const catchAsync = require("../utils/catchAsync");
// const router = require('express').Router();
const { User, Timeid, Slots, Service } = require("../models");

// router.post('/',

exports.postUser = catchAsync(async (req, res) => {
  try {
    const userData = await User.create(req.body);

    //   req.session.save(() => {
    //     req.session.user_id = userData.id;
    //     req.session.logged_in = true;

    res.status(200).json(userData);
    //   });
  } catch (err) {
    res.status(400).json(err);
  }
});

// Get all users

// router.get('/',
exports.getAllUsers = catchAsync(async (req, res) => {
  try {
    const userData = await User.findAll();
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get specific user by ID
// router.get('/:id',

exports.getUser = catchAsync(async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id, {
      attributes: { exclude: ["password"] },
      include: [
        { model: Slots, include: [{ model: Service }, { model: Timeid }] },
      ],
    });
    res.status(200).json(userData);
    if (!userData) {
      res.status(400).json({ message: "User not found" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//   Modify user
// router.put('/:id',

exports.putUser = catchAsync(async (req, res) => {
  try {
    const userData = await User.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(userData);
    if (!userData) {
      res.status(400).json({ message: "User not found" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// module.exports = router;
