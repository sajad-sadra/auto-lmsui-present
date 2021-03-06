const tools = require("../Tool"),
    pwd = require("./projectpath");

module.exports = {
    baseUrl: "http://lms.ui.ac.ir",
    helding_class_flag: "برگزاری",
    baseTimeOut: 1000,
    welcome_message: "",
    credentials: {
        phpssid: process.env.SSID,
        username: process.env.USERNAME,
        password: process.env.PASSWORD
    },

    get screenshot_path() {
        return `${pwd()}/screenshot/${tools.time()}.png`;
    },

    browser_launch_config: {
        executablePath: "/usr/bin/google-chrome",
        headless: false
    }

}