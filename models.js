const sequelize = require('./db');
const { DataTypes } = require('sequelize');

const User = sequelize.define(
    'user',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        chatId: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        right: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
        wrong: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
    },
    {
        timestamps: false,
        indexes: [
            {
                unique: true,
                fields: ['chatId'],
            },
        ],
    }
);

module.exports = User;
