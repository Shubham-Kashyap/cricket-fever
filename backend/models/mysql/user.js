let { sequelize, Sequelize, Model, DataTypes } = require("../config/db");
// const bcrypt = require("bcrypt");


const User = sequelize.define('User', {
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
    password: {
        type: DataTypes.STRING,
        allowNull: true,
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
    // alter: true,
    // force: true,

});

// sequelize.sync().then(() => {

// });


module.exports = User;