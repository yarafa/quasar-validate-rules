import { message as en_US } from "./en_US";
import { message as zh_CN } from "./zh_CN";

let messageMap = {
  en_US: en_US,
  zh_CN: zh_CN,
};
export function getDefaultMessage(/*key, locale, args*/) {
  if (!arguments || arguments.length < 2) return "";

  let key = arguments[0];
  let locale = arguments[1];
  if (!locale) locale = "zh_CN";

  let msg = messageMap[locale][key];
  if (
    key === "minLength" ||
    key === "maxLength" ||
    key === "minValue" ||
    key === "maxValue"
  ) {
    return msg.format(arguments[2]);
  } else if (key === "between") {
    return msg.format(arguments[2], arguments[3]);
  }
  return msg;
}

String.prototype.format = function (args) {
  var result = this;
  if (arguments.length > 0) {
    if (arguments.length == 1 && typeof args == "object") {
      for (var key in args) {
        if (args[key] != undefined) {
          var reg = new RegExp("({" + key + "})", "g");
          result = result.replace(reg, args[key]);
        }
      }
    } else {
      for (var i = 0; i < arguments.length; i++) {
        if (arguments[i] != undefined) {
          var reg = new RegExp("({)" + i + "(})", "g");
          result = result.replace(reg, arguments[i]);
        }
      }
    }
  }
  return result;
};
