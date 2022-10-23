module.exports = {


    /** @library imports */
    jwt: require('jsonwebtoken'),
    chalk: require('chalk'),
    validator: require('../utils/ValidateWithValidatorJS'),
    mysql2: require('mysql2'),
    sequelize: require('sequelize'),
    express: require('express'),
    express_validator: require('express-validator'),
    jwt: require('jsonwebtoken'),
    // bcrypt: require('bcrypt'),
    /** @library imports custom*/



    apiRoutes: require('../routes/api_routes'),
    db: require('../config/db'),


}