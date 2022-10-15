const { chalk, express, apiRoutes } = require('../exports/library')

class boot_app {

    constructor(port, app) {
        this.port = port;
        this.app = app();
    }

    start = () => {
        this._listen();
        this._setupRoutes();
        this._setupRoutes();
        this._displayIncommingRequest();
    }

    _listen = () => {
        // console.log("port", this.port);
        this.app.listen(this.port, () => {
            console.log(chalk.yellow.inverse.bold('Success ! Server is running on port :'), chalk.cyan.bold(this.port))
        });
    }

    _setupRoutes = () => {

        // this.app.use(express)
        this.app.use(express.json());
        this.app.use(express.urlencoded({
            extended: true
        }));
        this.app.use('/api/v1', apiRoutes);
    }

    _displayIncommingRequest = () => {
        this.app.use((req, res, next) => {
            // For example, a GET request to `/test` will print "GET /test"
            var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
            console.log(chalk.yellow(`${req.method} : ${fullUrl}`));
            next();
        });

    }
}

module.exports = boot_app