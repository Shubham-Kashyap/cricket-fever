module.exports = {


    /** @library imports */
    jwt: require('jsonwebtoken'),
    chalk: require('chalk'),
    env: require('dotenv').config(),
    validator: require('../utils/Validate'),
    dotenv: require('dotenv').config(),
    mysql2: require('mysql2'),
    sequelize: require('sequelize'),
    express_validator: require('express-validator'),
    jwt: require('jsonwebtoken'),
    // bcrypt: require('bcrypt'),
    /** @library imports custom*/


    apiRoutes: require('../routes/api_routes'),


    models: function () {
        // process.env.
    }


}