"use strict";

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var obj = {
  comments: {
    links: '#',
    type: 'test',
    id: 0
  },
  people: {
    links: '#',
    type: 'autor',
    id: 1
  },
  articles: {
    links: '#',
    type: 'title',
    id: 2
  }
};

function getRestArray(a, b) {
  for (var _len = arguments.length, rest = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    rest[_key - 2] = arguments[_key];
  }

  console.log(a, b, rest);
}

getRestArray('4', '5', '6,', '7', '8'); // 4, 5 ,["6,", "7", "8"]

function getSpread() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var people = data.people,
      object = _objectWithoutProperties(data, ["people"]);

  var test = ['1', {}, '3,', object];
  console.log(test);
}

getSpread(obj);
getSpread();