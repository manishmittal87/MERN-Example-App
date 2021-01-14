// module.exports.Logger = function () {
// const Logger = function () {
module.exports = function () {
    this.info = (logText) =>
    {
        console.log(new Date() + "info:::::" + logText);
    }
    
    this.debug = (logText) =>
    {
        console.log(new Date() + "debug:::::" + logText);
    }

    this.error = (logText) =>
    {
        console.log(new Date() + "error:::::" + logText);
    }
}

//module.exports = Logger;