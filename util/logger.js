const winston = require('winston');
const loggerLevel = process.env.LOGGER_LEVEL || "debug" || "info" || "error";
const t = new Date()+"UTC"
// const MESSAGE = Symbol.for('message');

// const jsonFormatter = (logEntry) => {
//     const base = { timestamp: new Date(t)};
//     const json = Object.assign(base, logEntry)
//     logEntry[MESSAGE] = JSON.stringify(json);
//     return logEntry;
// }

let alignColorsAndTime = winston.format.combine(
    // winston.format.colorize({
    //     all:true
    // }),
    winston.format.colorize(),
    winston.format.label({
        label:'[LOG]'
    }),
    winston.format.timestamp({
        format:"YYYY-MM-DD HH:mm:ss"
    }),
    winston.format.printf(
        info => ` ${info.label}  ${info.timestamp}  ${info.level}: ${info.message}`
    )
);

const logger = winston.createLogger({
    // level: 'info',
    // format: winston.format(jsonFormatter)(),
    format: winston.format.combine(winston.format.colorize(), alignColorsAndTime),
    transports: [
        new winston.transports.File({
            filename: 'logs/errors.log',
            level: 'error',
            handleExceptions: true,
            // json: false,
            // colorize: false
        }),
        new winston.transports.Console({
            level: loggerLevel
        })
    ]
});

module.exports = logger;

