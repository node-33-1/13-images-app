const express = require('express');
const carRouter = require('./car.router');
const router = express.Router();

// colocar las rutas aquí
router.use(carRouter);

module.exports = router;