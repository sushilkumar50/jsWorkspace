// this file dosent transpile so must be in CommomJs and ES5

// Register babel to transpile before our tests run
require('babel-register');

// Disable webpack features that mocha dosent understand
require.extensions['.css'] = function() {};
