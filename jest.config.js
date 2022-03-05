module.exports = {
  preset: 'ts-jest',
  globals: {},
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.vue$': 'vue-jest',
  },
  moduleFileExtensions: ['vue', 'js', 'json', 'jsx', 'ts', 'tsx', 'node'],
  moduleDirectories: ['src', 'node_modules'],
  moduleNameMapper: {
    '^~/(.*)': '<rootDir>/src/$1',
  },
  transformIgnorePatterns: ['<"rootDir">/node_modules/@ywchang2404/ui'],
}
