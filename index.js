const userInfo = require('./information.js');
var cowsay = require("cowsay");

console.log(cowsay.say({
    text: `Hi, I'm a ${userInfo.info.name} and I study at ${userInfo.info.campus} campus!`,
    e: "oO",
    T: "U "
}));