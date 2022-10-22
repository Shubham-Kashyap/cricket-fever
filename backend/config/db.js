// const { env } = require('../exports/library');
const { env } = require('../exports/library')

const { Sequelize, Model, DataTypes } = require("sequelize");

const { chalk } = require('../exports/library');

let sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: "mysql",
    }
);

sequelize
    .authenticate()
    .then(() => {
        sequelize.sync();
        console.log(chalk.yellow.inverse.bold("Success databse connected!"));
    })
    .catch((err) => {
        console.log(err);
    });

sequelize.sync();

module.exports = { sequelize, Sequelize, Model, DataTypes };







