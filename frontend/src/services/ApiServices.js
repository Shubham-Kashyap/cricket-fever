import config from '../config/default.json';
let api_end_point = config.api_endpoint;



const post_api_call = async (paramEndPoint, requestData = {}) => {
    try {

        // console.log(requestData)
        let result = await fetch(`${api_end_point}${paramEndPoint}`, {
            method: 'POST',
            headers: {
                Accept: "application/x-www-form-urlencoded",
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem("authtoken"),
            },
            body: JSON.stringify(requestData),
        });
        let response = await result.json();

        return response;

    } catch (error) {
        return error;
    }
}

const get_api_call = async (paramEndPoint, requestData = {}) => {
    try {
        let result = await fetch(`${api_end_point}${paramEndPoint}`, {
            method: 'GET',
            headers: {
                Accept: "application/x-www-form-urlencoded",
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem("authtoken"),
            },
            body: JSON.stringify(requestData),
        });
        let response = await result.json();
        return response;
    } catch (error) {
        return error;
    }
}

const get_cricket_data = async () => {
    try {
        let result = await fetch(`https://api.cricapi.com/v1/currentMatches?apikey=${config?.cricketData?.apikey}&offset=${config?.cricketData?.offset}`, {
            method: 'GET',
            headers: {
                Accept: "application/x-www-form-urlencoded",
                "Content-Type": "application/json",
            },

        });
        let response = await result.json();
        return response;
    } catch (error) {
        return error;
    }
}

export {

    post_api_call,
    get_api_call,
}