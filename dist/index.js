"use strict";

function res(arg) {
  for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    rest[_key - 1] = arguments[_key];
  }

  console.log(arg, rest);
}

res(1, 2, 3, 4, 5, 6, 7);