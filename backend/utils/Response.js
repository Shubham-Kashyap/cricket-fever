class Response {
    async returnErrorResponse(res, message, data = []) {
        return res.send({
            status: false,
            message: message,
            data: data
        })
    }
    async returnSuccessResponse(res, message, data = []) {
        return res.send({
            status: true,
            message: message,
            data: data
        })
    }
}

const res = new Response();
module.exports = res;
module.returnErrorResponse = res.returnErrorResponse;
module.returnSuccessResponse = res.returnSuccessResponse;