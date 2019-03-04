"use strict";

var _index = require("index");

var _index2 = require("src/index");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Main =
/*#__PURE__*/
function () {
  function Main(title, firstName) {
    _classCallCheck(this, Main);

    this.title = title;
    this.done = false;
    this.firstName = firstName;
  }

  _createClass(Main, [{
    key: "test",
    value: function test() {
      this.done = true;
      console.log("".concat(this.title, " done"));
    }
  }], [{
    key: "getFirstName",
    value: function getFirstName() {
      return new Main('Sergey');
    }
  }]);

  return Main;
}();

var Task =
/*#__PURE__*/
function (_Main) {
  _inherits(Task, _Main);

  function Task() {
    var _this;

    _classCallCheck(this, Task);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Task).call(this));

    _defineProperty(_assertThisInitialized(_this), "fu", function () {
      return {
        firstName: 'Sergey',
        lastName: 'Saltykov',
        company: 'US'
      };
    });

    return _this;
  }

  _createClass(Task, [{
    key: "complete",
    value: function complete(value) {
      // просто экспериментировал с наследованием.
      _get(_getPrototypeOf(Task.prototype), "test", this).call(this);

      return value;
    }
  }], [{
    key: "sum",
    value: function sum(a, b) {
      return a + b;
    }
  }]);

  return Task;
}(Main);

_defineProperty(Task, "age", 25);

_defineProperty(Task, "year", 2019);

var main = new Main('Пробный класс');
var task = new Task();
var getName = Main.getFirstName();
main.test();
task.test();
task.complete(22);
console.log(getName.firstName);
console.log(Task.sum(4, 8));
task.fu();
console.log(Task.year);
console.log(Task.age);
(0, _index.test)();
(0, _index.testMap)();

var AsyncAwait =
/*#__PURE__*/
function () {
  function AsyncAwait() {
    _classCallCheck(this, AsyncAwait);
  }

  _createClass(AsyncAwait, [{
    key: "getJsonData",
    value: function () {
      var _getJsonData = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                data = (0, _index2.foo)();
                return _context.abrupt("return", data.then(function (_ref) {
                  var data = _ref.data;
                  return console.log(data);
                }).catch(function () {
                  return console.log('Error');
                }));

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getJsonData() {
        return _getJsonData.apply(this, arguments);
      }

      return getJsonData;
    }()
  }, {
    key: "getList",
    value: function () {
      var _getList = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2() {
        var test;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0, _index2.foo)();

              case 2:
                test = _context2.sent;
                console.log(test.data);
                return _context2.abrupt("return", test.data);

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function getList() {
        return _getList.apply(this, arguments);
      }

      return getList;
    }()
  }, {
    key: "getList",
    value: function () {
      var _getList2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3() {
        var test;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return (0, _index2.foo)();

              case 2:
                test = _context3.sent;
                console.log(test.data);
                return _context3.abrupt("return", test.data);

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function getList() {
        return _getList2.apply(this, arguments);
      }

      return getList;
    }()
  }, {
    key: "testTryChatch",
    value: function () {
      var _testTryChatch = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee4() {
        var _test;

        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return (0, _index2.foo)();

              case 3:
                _test = _context4.sent;
                _context4.next = 6;
                return qwerty();

              case 6:
                console.log(_test.data);
                _context4.next = 12;
                break;

              case 9:
                _context4.prev = 9;
                _context4.t0 = _context4["catch"](0);
                console.error('error');

              case 12:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 9]]);
      }));

      function testTryChatch() {
        return _testTryChatch.apply(this, arguments);
      }

      return testTryChatch;
    }()
  }]);

  return AsyncAwait;
}();

_asyncToGenerator(
/*#__PURE__*/
regeneratorRuntime.mark(function _callee5() {
  return regeneratorRuntime.wrap(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.t0 = console;
          _context5.next = 3;
          return (0, _index2.foo)();

        case 3:
          _context5.t1 = _context5.sent;

          _context5.t0.log.call(_context5.t0, _context5.t1);

        case 5:
        case "end":
          return _context5.stop();
      }
    }
  }, _callee5);
}))();

var asyncAwait = new AsyncAwait();
asyncAwait.getList();
asyncAwait.testTryChatch();
asyncAwait.getJsonData();