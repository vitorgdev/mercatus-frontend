"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _lib = _interopRequireDefault(require("vuetify/lib"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

_vue["default"].use(_lib["default"]);

var _default = new _lib["default"]({
  theme: {
    themes: {
      light: {
        primary: "#ff6f61",
        secondary: "#3F428E",
        accent: "#7D7D7D",
        error: "#A72828",
        warning: "#FFAB61",
        info: "#C661FF",
        success: "#28A745"
      }
    }
  }
});

exports["default"] = _default;
