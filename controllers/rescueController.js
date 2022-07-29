const Rescue = require('../models/rescueSchema');
const RescueData = require('../data/rescueData')

const seed = async (req, res) => {
  try {
    await Rescue.deleteMany({});
    res.status(201).json(await Rescue.create(rescueData))
  } catch (error) {
    res.status(400).json(error)
  }
};

const index = async (req, res) => {
  try {
    res.status(200).json(await (await Rescue.find({})).reverse())
  } catch (error) {
    res.status(400).json(error)
  }
};

//Delete
const deleteRescue = async (req, res) => {
  try {
    res.status(204).json(await Rescue.findByIdAndDelete(req.params.id))
  } catch (error) {
    res.status(400).json(error)
  }
};

//Update
const update = async (req, res) => {
  try {
    res.status(200).json(await Rescue.findByIdAndUpdate(req.params.id, req.body, {new: true}))
  } catch (error) {
    res.status(400).json(error)
  }
};

//Show
const show = async (req, res) => {
  try {
    res.status(200).json(await Rescue.findById(req.params.id))
  } catch (error) {
    res.status(400).json(error)
  }
};

module.exports = {
  index,
  delete: deleteRescue,
  update,
  seed,
  show
};