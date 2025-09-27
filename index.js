function receivesAFunction(callback) {
	callback();
}

function returnsANamedFunction () {
	function namedFn () {
		return "I am a Named Fn";
	}
}

function returnsAnAnonymousFunction () {
	return function() {
		return "I am a named Function";
	};

module.exports = {
  receivesAFunction,
  returnsANamedFunction,
  returnsAnAnonymousFunction
};