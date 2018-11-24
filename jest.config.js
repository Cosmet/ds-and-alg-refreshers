module.exports = {
    moduleFileExtensions: [
        "ts",
        "tsx",
        "js",
        "jsx",
        "json",
        "node"
    ],
    testMatch: [
        "<rootDir>/**/*.spec.ts",
        "<rootDir>/**/*.spec.tsx",
    ],
    transform: {
        "^.+\\.tsx?$": "ts-jest",
    },
    testEnvironment: 'node'
};
