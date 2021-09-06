/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
    setupFilesAfterEnv: ["<rootDir>/src/tests/setupTests.ts"],
    testEnvironment: "jsdom",
    transform: {
        "^.+\\.js?$": "babel-jest",
        "^.+\\.tsx?$": "babel-jest",
        "^.+\\.(svg|png)$": "<rootDir>/src/tests/transformers/fileTransformers.js",
    },
    snapshotSerializers: ["enzyme-to-json/serializer"],
};
