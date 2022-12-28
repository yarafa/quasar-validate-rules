import * as methods from "@vuelidate/validators";
import { getDefaultMessage } from "../locale";

export default ({ app }) => {
  app.config.globalProperties.$rules = {
    is(value, message) {
      message = message !== undefined ? message : false;
      return (val) => {
        let result;
        switch (typeof value) {
          case "string":
            result = String(val) === value;
            break;
          case "number":
            result = Number(val) === value;
            break;
          default:
            result = val === value;
        }
        return result || message;
      };
    },
    required(message = false) {
      return (val) =>
        methods.required.$validator(val) ||
        message ||
        getDefaultMessage("required", app.config.globalProperties.$locale);
    },
    requiredIf(ref, message = false) {
      return (val) => methods.requiredIf(ref).$validator(val) || message;
    },
    requiredUnless(ref, message = false) {
      return (val) => methods.requiredUnless(ref).$validator(val) || message;
    },
    minLength(length, message = false) {
      return (val) =>
        methods.minLength(length).$validator(val) ||
        message ||
        getDefaultMessage(
          "minLength",
          app.config.globalProperties.$locale,
          length
        );
    },
    maxLength(length, message = false) {
      return (val) =>
        methods.maxLength(length).$validator(val) ||
        message ||
        getDefaultMessage(
          "maxLength",
          app.config.globalProperties.$locale,
          length
        );
    },
    minValue(value, message = false) {
      return (val) =>
        methods.minValue(value).$validator(val) ||
        message ||
        getDefaultMessage(
          "minValue",
          app.config.globalProperties.$locale,
          value
        );
    },
    maxValue(value, message = false) {
      return (val) =>
        methods.maxValue(value).$validator(val) ||
        message ||
        getDefaultMessage(
          "maxValue",
          app.config.globalProperties.$locale,
          value
        );
    },
    between(min, max, message = false) {
      return (val) =>
        methods.between(min, max).$validator(val) ||
        message ||
        getDefaultMessage(
          "between",
          app.config.globalProperties.$locale,
          min,
          max
        );
    },
    alpha(message = false) {
      return (val) => methods.alpha.$validator(val) || message;
    },
    alphaNum(message = false) {
      return (val) => methods.alphaNum.$validator(val) || message;
    },
    numeric(message = false) {
      return (val) =>
        methods.numeric.$validator(val) ||
        messag ||
        getDefaultMessage("numeric", app.config.globalProperties.$locale);
    },
    integer(message = false) {
      return (val) =>
        methods.integer.$validator(val) ||
        message ||
        getDefaultMessage("integer", app.config.globalProperties.$locale);
    },
    decimal(message = false) {
      return (val) =>
        methods.decimal.$validator(val) ||
        message ||
        getDefaultMessage("decimal", app.config.globalProperties.$locale);
    },
    email(message = false) {
      return (val) =>
        methods.email.$validator(val) ||
        messag ||
        getDefaultMessage("email", app.config.globalProperties.$locale);
    },
    ipAddress(message = false) {
      return (val) =>
        methods.ipAddress.$validator(val) ||
        message ||
        getDefaultMessage("ipAddress", app.config.globalProperties.$locale);
    },
    macAddress(separator = ":", message = false) {
      return (val) =>
        methods.macAddress.$validator(separator)(val) ||
        message ||
        getDefaultMessage("macAddress", app.config.globalProperties.$locale);
    },
    url(message = false) {
      return (val) =>
        methods.url.$validator(val) ||
        message ||
        getDefaultMessage("url", app.config.globalProperties.$locale);
    },
    or(...args) {
      let message = false;
      if (typeof args[args.length - 1] === "string") {
        message = args.pop();
      }
      return (val) => methods.or(...args).$validator(val) || message;
    },
    and(...args) {
      let message = false;
      if (typeof args[args.length - 1] === "string") {
        message = args.pop();
      }
      return (val) => methods.and(...args).$validator(val) || message;
    },
    not(rule, message = false) {
      return (val) => methods.not(rule).$validator(val) || message;
    },
    sameAs(locator, message = false) {
      return (val) => val == locator || message;
    },
  };
};
