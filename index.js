(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "module"], factory);
  } else if (typeof exports !== "undefined" && typeof module !== "undefined") {
    factory(exports, module);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, mod);
    global.isAnyError = mod.exports;
  }
})(this, function (exports, module) {
  "use strict";

  module.exports = isAnyError;

  function isAnyError() {
    var n = arguments.length;
    while (n--) {
      if (arguments[n] instanceof Error) {
        return true;
      }
    }
    return false;
  }

  ;
});
