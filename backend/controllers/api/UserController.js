/**
 * @Library imports
 */
const { returnSuccessResponse, returnErrorResponse } = require("../../utils/Response");
const { chalk, validator } = require('../../exports/library');
const { models } = require("../../config/db");
const { generateHash, compareHash } = require('../../services/crypto');

class UserController {

    /** @signup_api */
    async userSignup(req, res) {
        try {
            const _request = req.body;
            console.log(models.user)
            const data = await User.create({
                firstName: _request.fullname,
                dob: _request.dob,
                phone_no: _request.phone_no,
                password: await generateHash(_request.password)
            });
            return returnSuccessResponse(res, 'signup successfull', data);
        } catch (error) {
            return returnErrorResponse(res, error.message)
        }

    }

    /** @fetch_profile api */
    async fetchProfile(req, res) {
        console.log()
        Response.returnSuccessResponse(res, 'hello this is fetch profile api');
    }

    /** @update_profile */
    async updateProfile(req, res) {
        Response.returnSuccessResponse(res, 'hello this is update profile api');
    }
}

module.exports = new UserController();