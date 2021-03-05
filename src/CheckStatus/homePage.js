const config = require("../Config"),
    axios = require("axios").default;

module.exports = async () => {
    let response;
    try {
        response = await axios.get(`${config.baseUrl}/members/home`, {
            "headers": {
                "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                "accept-language": "en-US,en;q=0.9,fa-IR;q=0.8,fa;q=0.7",
                "cache-control": "no-cache",
                "pragma": "no-cache",
                "upgrade-insecure-requests": "1",
                "cookie": `PHPSESSID=${config.credentials.phpssid}; cc_loggedin=1`
            },
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": null,
            "mode": "cors",
            "maxRedirects": 0
        });
    } catch (e) {
        response = e.response;
    }
    return (response);
};
