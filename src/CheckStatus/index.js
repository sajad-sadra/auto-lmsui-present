const login = require("./login"),
    home_page = require("./homePage"),
    config = require("../Config"),
    { log } = require("../Tool"),
    parser = require("node-html-parser").parse;

module.exports = async () => {
    let class_link = undefined;
    let homepage_data = await home_page();
    while (homepage_data.status === 302) {
        await login();
        homepage_data = await home_page();
        console.log(homepage_data.status)
    }
    //let kk = 0;
    // parser(homepage_data.data).childNodes[1].parentNode.childNodes[1].childNodes.forEach(e => {
    //     console.log(e.toString())
    //     console.log("---" + kk++ + "----");
    // });
    parser(homepage_data.data).childNodes[1].parentNode.childNodes[1].childNodes[76].childNodes[3].childNodes[21].childNodes.forEach(e => {
        if (e.toString().includes(config.helding_class_flag)) {
            let href = e.childNodes[3].rawAttrs.split('"')[3];
            if (!href) {
                href = e.childNodes[5].rawAttrs.split('"')[3];
            }
            class_link = config.baseUrl + href;
        }
    });
    return class_link;
};
