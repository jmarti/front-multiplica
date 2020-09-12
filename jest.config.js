module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    verbose: true,
    collectCoverage: false,
    collectCoverageFrom: ['src/**/*.ts']
};