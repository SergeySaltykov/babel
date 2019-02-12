"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.testMap = testMap;
exports.test = void 0;

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

testMap();