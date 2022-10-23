const server = require('./config/app');
const { chalk, express } = require('./exports/library');
const env = require('dotenv').config();
const port = process.env.PORT;
require('./exports/library');

// console.log("endpoints --- ", env);
// console.log('option 1 - ', env.parsed.PORT, 'option 2 - ', process.env.PORT);

const boot = async () => {
    try {
        const application = new server(port, express);
        await application.start();
    } catch (error) {
        console.log(error)
        console.log(chalk.yellow.inverse.bold('boot error:'), chalk.cyan.bold(error.message));
        process.exit([0]);
    }
}

boot();