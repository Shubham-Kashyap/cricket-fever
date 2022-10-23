const { Sequelize, Model, DataTypes } = require("sequelize");
const env = require('dotenv').config();
const chalk = require('chalk');

let sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: "mysql",
    }
);

const models = {
    user: require('../models/mysql/user')(sequelize)
}
const connectWithDatabase = () => {
    sequelize.sync()
    sequelize
        .authenticate()
        .then(() => {
            // sequelize.sync();
            console.log(chalk.yellow.bold("Success databse connected!"));
        })
        .catch((error) => {
            console.log(err.message)
            throw new Error('DB CONNECTION ERROR - ', error.message)
            process.exit([0]);
        });

}


module.exports = { sequelize, Sequelize, Model, DataTypes, connectWithDatabase, models };







