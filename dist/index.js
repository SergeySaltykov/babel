"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.testMap = testMap;
exports.foo = foo;
exports.test = void 0;

require("@babel/polyfill");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var test = function test(message) {
  return console.log('babel test');
};

exports.test = test;
test();

function testMap() {
  var arr = ['1', '2', '3'];
  return arr.map(function (item) {
    return item > 1;
  });
}

function foo() {
  return _foo.apply(this, arguments);
}

function _foo() {
  _foo = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    var data;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            data = {
              data: [{
                type: 'articles',
                id: 1,
                attributes: {
                  title: "JSON:API",
                  link: "#"
                }
              }, {
                type: 'people',
                id: 2,
                attributes: {
                  firstName: "Ivan",
                  lastName: "Ivanov",
                  link: "#"
                }
              }]
            };
            return _context.abrupt("return", data);

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _foo.apply(this, arguments);
}

testMap();