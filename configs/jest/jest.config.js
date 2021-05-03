'use strict';

module.exports = {
    collectCoverage: true,
    collectCoverageFrom: [
        "src/**/*.js"
    ],
    coverageDirectory: 'coverage/',
    coverageReporters: [
        [ "lcov", { projectRoot: '../../' } ],
        "text"
    ],
    errorOnDeprecated: true,
    resetMocks: true,
    resetModules: true,
    restoreMocks: true,
    testMatch: [
        '**/*.test.js'
    ],
    timers: 'fake',
    verbose: true
};
