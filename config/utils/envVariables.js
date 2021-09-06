const dotenv = require("dotenv");

const config = dotenv.config().parsed;
const envVariables = Object.keys(config).reduce((prev, next) => {
    prev[next] = JSON.stringify(config[next]);
    return prev;
}, {});

module.exports = (nodeEnv) => {
    if (nodeEnv) {
        return {
            "process.env": {
                NODE_ENV: JSON.stringify(nodeEnv),
                ...envVariables,
            },
        };
    }

    return { "process.env": envVariables };
};
