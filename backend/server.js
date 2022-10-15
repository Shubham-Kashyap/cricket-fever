const server = require('./boot/app');
const port = process.env.PORT || 4500
const chalk = require('chalk');
var app = require('express');

const boot = async () => {
    try {
        const application = new server(port, app);
        await application.start();
    } catch (error) {
        console.log(chalk.yellow.inverse.bold('boot error:'), chalk.cyan.bold(error.message))
    }
}

boot();