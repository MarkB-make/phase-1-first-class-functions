require ( './helpers.js' );

const chai = require("chai");
const spies = require("chai-spies");
chai.use(spies);

describe("index", () => {
  describe("receivesAFunction(callback)", () => {
    it("receives a function and calls it", () => {
      const spy = chai.spy();

      receivesAFunction(spy);

      expect(spy).to.have.been.called();
    });
    function receivesAFunction(callback) {
      callback();
    } 
  });

  describe("returnsANamedFunction()", () => {
    var fn;

    before(() => {
      fn = returnsANamedFunction();
    });

    it("returns a function", () => {
      expect(fn).to.be.a("function");
    });

    it("returns a named function", () => {
      expect(fn.name).not.to.eql("");
    });
    function returnsANamedFunction() {
      function namedFn () {
        return "I am a named Fn"
      }
      return namedFn;
    }
  });

  describe("returnsAnAnonymousFunction()", () => {
    var fn;

    before(() => {
      fn = returnsAnAnonymousFunction();
    });

    it("returns a function", () => {
      expect(fn).to.be.a("function");
    });

    it("returns an anonymous function", () => {
      expect(fn.name).to.eql("");
    });
    function returnsAnAnonymousFunction() {
      return function() {
        return "I am an anonymous Function"
      }
    }
  });
});
