const config = require("../Config"),
    axios = require("axios").default;

module.exports = async () => {
    let response;
    try {
        response = await axios.post(`${config.baseUrl}/login`, `username=${config.credentials.username}&password=${config.credentials.password}&submit=&remember=&return_url=`, {
            "headers": {
                "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                "accept-language": "en-US,en;q=0.9,fa-IR;q=0.8,fa;q=0.7",
                "cache-control": "no-cache",
                "content-type": "application/x-www-form-urlencoded",
                "pragma": "no-cache",
                "upgrade-insecure-requests": "1",
                "cookie": `PHPSESSID=${config.credentials.phpssid}; cc_loggedin=1`
            },
            "referrer": `${config.baseUrl}/`,
            "referrerPolicy": "strict-origin-when-cross-origin",
            "mode": "cors",
            "maxRedirects": 0
        });
    } catch (e) {
        response = e.response;
    }
    return (response);
}
