const Config = require("./Config");
const { log } = require("./Tool"),
    { baseTimeOut } = require("./Config"),
    browser = require("./Puppeteer"),
    check = require("./CheckStatus");

module.exports = async () => {
    let class_link = undefined;

    do {
        log("checking for", "on-helding", "classes");   
        class_link = await check();
        await new Promise(r => setTimeout(r, baseTimeOut * 10)); // wait for next check
    } while (class_link === undefined)
    
    browser(class_link);
}