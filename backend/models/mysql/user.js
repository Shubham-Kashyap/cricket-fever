const { Sequelize, DataTypes } = require('sequelize')
const chalk = require('chalk');

module.exports = (connection) => {
    const User = connection.define('User', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        fullname: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: true,
        },
        dob: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: true,
            set(value) {
                // Storing passwords in plaintext in the database is terrible.
                // Hashing the value with an appropriate cryptographic hash function is better.
                this.setDataValue('password', hash(value));
            }
        },
        user_role: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "user",
        },
        personal_access_token: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        phone_no: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        remember_token: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        is_email_verified: {
            type: DataTypes.ENUM,
            values: ["1", "0"],
            defaultValue: "0",
        },
        auth_token: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        created_at: {
            type: Sequelize.DATE(),
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP()'),
        },
        updated_at: {
            type: Sequelize.DATE(),
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP(3)'),
        },
    }, {
        tableName: "users",
        timestamps: false
    }).sync({
        alter: true, // for adding new coloummns and synchronizing them 
        // force: true, // for recreating the table structure by loosing data
    }).then(() => {
        console.log(chalk.yellow.bold("User model synchronization successfull --"))
    }).catch((error) => {
        throw new Error(chalk.yellow.bold("User model synchronization error --"), error.mesage)
    });

    return User;
}