const time = require("./time");

module.exports = (...msg) => {
    console.log(time(), "-", msg.join(" "));
}