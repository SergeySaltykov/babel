"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TestComponent = TestComponent;
exports.MainComponent = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var description = 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.';
var title = 'src';
var img = 'src';
var icon = 'class';

var element = _react.default.createElement("div", null, "\u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0430");

function TestComponent(_ref) {
  var contactName = _ref.contactName,
      contactEmail = _ref.contactEmail;
  return _react.default.createElement("div", {
    className: "test"
  }, _react.default.createElement("h1", null, title), _react.default.createElement("p", null, description, _react.default.createElement("i", {
    className: icon
  })), element, _react.default.createElement("img", {
    src: img,
    alt: "logo"
  }), _react.default.createElement("div", {
    className: "class"
  }, contactName, contactEmail));
}

TestComponent.defaultProps = {
  description: description,
  element: element,
  icon: icon,
  img: img,
  title: title
};
TestComponent.propTypes = {
  contactEmail: _propTypes.default.string,
  contactName: _propTypes.default.string
};

var MainComponent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MainComponent, _React$Component);

  function MainComponent(props) {
    _classCallCheck(this, MainComponent);

    return _possibleConstructorReturn(this, _getPrototypeOf(MainComponent).call(this, props));
  }

  _createClass(MainComponent, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(TestComponent, null);
    }
  }]);

  return MainComponent;
}(_react.default.Component);

exports.MainComponent = MainComponent;