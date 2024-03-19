const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Car = sequelize.define('car', {
    brand: {
        type: DataTypes.STRING,
        allowNull: false
    },
    model: {
        type: DataTypes.STRING,
        allowNull: false
    },
    year: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    imageUrl: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

module.exports = Car;