/** @type {import('jest').Config} */

export default {
    clearMocks: true,
    collectCoverage: true,
    coverageDirectory: 'coverage',
    coverageProvider: 'v8',
    testRegex: `(/__tests__/.*|(\\.|/)(test|spec))\\.m?[jt]sx?$`,
}
