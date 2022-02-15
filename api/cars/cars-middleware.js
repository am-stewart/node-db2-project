const Cars = require('./cars-model');
const db = require('../../data/db-config');
const vinValidator = require('vin-validator');

const checkCarId = async (req, res, next) => {
  try {
    const car = await Cars.getById(req.params.id)
    if (!car) {
      next({
        status: 404,
        message: `car with id ${req.params.id} is not found`
      })
    } else {
      req.car = car
      next();
    }
  } catch (err) {
    next(err)
  }
}

const checkCarPayload = async (req, res, next) => {
  const { vin, make, model, mileage } = req.body
  if (!vin) {
    res.status(400).json({ message: 'vin is missing' })
  } else if (!make) {
    res.status(400).json({ message: 'make is missing' })
  } else if (!model) {
    res.status(400).json({ message: 'model is missing' })
  } else if (mileage === undefined) {
    res.status(400).json({ message: 'mileage is missing' })
  } else {
    next();
  }
}

const checkVinNumberValid = async (req, res, next) => {
  try {
    const isValidVin = vinValidator.validate(req.body.vin)
    if(isValidVin) {
      next();
    } else {
      res.status(400).json({ message: `vin ${req.body.vin} is invalid` })
    }
  } catch (err) {
    next(err)
  }
}

const checkVinNumberUnique = async (req, res, next) => {
  try {

  } catch (err) {
    next(err)
  }
}

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique
}