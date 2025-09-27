function receivesAFunction(callback) {
  callback();
}

function returnsANamedFunction() {
  function namedFn() {
    return "I am a named function";
  }
  return namedFn;
}

function returnsAnAnonymousFunction() {
  return function() {
    return "I am an anonymous function";
  };
}

module.exports = {
  receivesAFunction,
  returnsANamedFunction,
  returnsAnAnonymousFunction 
};
