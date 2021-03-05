const tools = require("../Tool"),
    pwd = require("./projectpath");

module.exports = {
    baseUrl: "http://lms.ui.ac.ir",
    helding_class_flag: "برگزاری",
    baseTimeOut: 1000,
    welcome_message: "Salam",
    credentials: {
        phpssid: process.env.SSID,
        username: process.env.USER,
        password: process.env.PASS
    },

    get screenshot_path() {
        return `${pwd()}/screenshot/${tools.time()}.png`;
    },

    browser_launch_config: {
        executablePath: "/opt/google/chrome/chrome",
        headless: false
    }

}