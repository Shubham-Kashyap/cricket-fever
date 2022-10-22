const { returnErrorResponse } = require('../utils/Response');

const query = (queryName) => {
    queryName.then((returnData) => {
        return {
            status: true,
            data: returnData
        };
    }).catch((error) => {
        return {
            status: false,
            data: error.message
        }
    });
}

module.exports = query;