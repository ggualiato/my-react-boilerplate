/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
    // The paths to modules that run some code to configure or set up the testing environment before each test
    setupFiles: ["<rootDir>/src/tests/setupTests.ts"],
    // The test environment that will be used for testing
    testEnvironment: "jsdom",
    // A map from regular expressions to paths to transformers
    transform: {
        "^.+\\.js?$": "babel-jest",
        "^.+\\.tsx?$": "babel-jest",
        "^.+\\.(svg|png)$": "<rootDir>/src/tests/transformers/fileTransformers.js",
    },
    snapshotSerializers: ["enzyme-to-json/serializer"],
};
