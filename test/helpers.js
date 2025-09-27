const chai = require("chai");
global.expect = chai.expect;

// load functions from index.js
const {
  receivesAFunction,
  returnsANamedFunction,
  returnsAnAnonymousFunction
} = require("../index.js");

global.receivesAFunction = receivesAFunction;
global.returnsANamedFunction = returnsANamedFunction;
global.returnsAnAnonymousFunction = returnsAnAnonymousFunction;
