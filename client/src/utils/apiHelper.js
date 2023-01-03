const { default: axios } = require("axios");

const port = process.env.REACT_APP_PORT || 5000;
const BASE_URL = `http://localhost:${port}`;

export const APIHelper = async (method, url, payload={}, header=null) => {
    const res = await axios({
        method,
        url,
        baseURL: BASE_URL,
        data: payload,
        headers: header ? header : {
            "Content-Type": "application/json",
        }
    })

    return res;
}