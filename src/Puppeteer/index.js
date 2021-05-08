const puppeteer = require('puppeteer-core'),
    { log } = require("../Tool"),
    config = require("../Config");

module.exports = async (link) => {
    log("start class", link)
    const browser = await puppeteer.launch(config.browser_launch_config);
    const page = await browser.newPage();

    // Login
    await page.goto(`${config.baseUrl}/login`);
    await page.keyboard.type(config.credentials.username);
    await page.keyboard.press("Tab");
    await page.keyboard.type(config.credentials.password);
    await page.keyboard.press("Enter");
    await page.waitForNavigation();

    // Goto Class link
    await page.goto(link);
    await page.waitForTimeout(config.baseTimeOut * 10);

    // Click on "listen only" class type
    let selector = "div > div > div.content--IVOUy > div > div > span > button:nth-child(2) > span.button--Z2dosza.jumbo--Z12Rgj4.default--Z19H5du.circle--Z2c8umk > i".split(" > ");
    let element = await page.$("div.portal--27FHYi");
    for (let i = 0; i < selector.length; i++) {
        tmp = await element.$(selector[i]);
        element = tmp;
    }
    await element.click();

    // Send welcome (hello) message in public chat
    (await page.$("#message-input")).click();
    await page.waitForTimeout(config.baseTimeOut * 3);
    await page.keyboard.type(config.welcome_message);
    //await page.keyboard.press("Enter");

    await page.waitForTimeout(config.baseTimeOut);

    // Take screenshot
    await page.screenshot({ path: config.screenshot_path });
};    