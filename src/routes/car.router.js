const { getAll, create, remove } = require('../controllers/car.controllers');
const express = require('express');
const upload = require('../utils/multer');

const carRouter = express.Router();

carRouter.route('/cars')
    .get(getAll)
    .post(upload.single('photo'), create);

carRouter.route('/cars/:id')
    .delete(remove);

module.exports = carRouter;
