/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */
import type { Config } from "jest";

const config: Config = {
    setupFilesAfterEnv: ["<rootDir>/src/tests/setupTests.ts"],
    testEnvironment: "jsdom",
    transform: {
        "^.+\\.js?$": "babel-jest",
        "^.+\\.tsx?$": "babel-jest",
        "^.+\\.(svg|png)$": "<rootDir>/src/tests/transformers/fileTransformers.js",
    },
    snapshotSerializers: ["enzyme-to-json/serializer"],
};

export default config;
