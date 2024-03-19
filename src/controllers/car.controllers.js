const catchError = require('../utils/catchError');
const Car = require('../models/Car');
const { uploadToCloudinary, deleteFromCloudinary } = require('../utils/cloudinary')

const getAll = catchError(async(req, res) => {
    const cars = await Car.findAll();
    return res.json(cars);
});

const create = catchError(async(req, res) => {
    const { url } = await uploadToCloudinary(req.file);
    const { brand, model, year } = req.body;
    const car = await Car.create({
        brand, model, year, imageUrl: url,
    });
    return res.status(201).json(car);
});

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    const car = await Car.findByPk(id);
    await deleteFromCloudinary(car.imageUrl);
    await car.destroy();
    return res.sendStatus(204);
});

module.exports = {
    getAll,
    create,
    remove,
}
