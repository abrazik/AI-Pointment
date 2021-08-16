const catchAsync = require("../utils/catchAsync");
// const router = require('express').Router();
const { Slots, User, Timeid, Service } = require("../models");

// Post: Create a new appointment

// router.post('/',

exports.postAppointment = catchAsync(async (req, res) => {
  try {
    const slotsData = await Slots.create(req.body);

    res.status(200).json(slotsData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Get all Slots
// router.get('/',
exports.getAllAppointment = catchAsync(async (req, res) => {
  try {
    const slotsData = await Slots.findAll({
      include: [{ model: Timeid }, { model: Service }],
      attributes: { exclude: ["time_id", "service_id"] },
    });
    res.status(200).json(slotsData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get Slots by date

// router.get('/by-date',
exports.getAppointmentByDate = catchAsync(async (req, res) => {
  try {
    const slotsData = await Slots.findAll({
      where: {
        date: req.body.date,
      },
    });
    res.status(200).json(slotsData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get Slots by user

// router.get('/by-name',
exports.getAppointmentByUser = catchAsync(async (req, res) => {
  try {
    const slotsData = await Slots.findAll({
      where: {
        user_id: req.body.id,
      },
      include: [
        { model: Timeid, attributes: ["timestring"] },
        { model: Service, attributes: ["name"] },
        { model: User, attributes: { exclude: ["password"] } },
      ],
    });
    console.log(slotsData);
    res.status(200).json(slotsData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get Slot by specific ID
// router.get('/:id',

exports.getAppointmentById = catchAsync(async (req, res) => {
  try {
    const slotsData = await Slots.findByPk(req.params.id);
    res.status(200).json(slotsData);
    if (!slotsData) {
      res.status(400).json({ message: "User not found" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//   Modify user
// router.put('/:id',
exports.putAppointment = catchAsync(async (req, res) => {
  try {
    const slotsData = await Slots.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(slotsData);
    if (!slotsData) {
      res.status(400).json({ message: "User not found" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// module.exports = router;
