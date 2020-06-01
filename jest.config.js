module.exports = {
  testPathIgnorePatterns: ['./node_modules/'],
  moduleFileExtensions: ['js'],
  transform: {
    '^.+\\.js?$': 'babel-jest',
  },
  testEnvironment: 'node',
};
