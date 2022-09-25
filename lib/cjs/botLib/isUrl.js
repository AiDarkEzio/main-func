"use strict";
// copped by https://github.com/segmentio/is-url
Object.defineProperty(exports, "__esModule", { value: true });
exports.isBoolean = exports.isNumber = exports.isObject = exports.isString = exports.isUrl = void 0;
var protocolAndDomainRE = /^(?:\w+:)?\/\/(\S+)$/;
var localhostDomainRE = /^localhost[\:?\d]*(?:[^\:?\d]\S*)?$/;
var nonLocalhostDomainRE = /^[^\s\.]+\.\S{2,}$/;
/**
 * Loosely validate a URL `string`.
 *
 * @param {String} string
 * @return {Boolean}
 */
function isUrl(string) {
    if (typeof string !== "string") {
        return false;
    }
    var match = string.match(protocolAndDomainRE);
    if (!match) {
        return false;
    }
    var everythingAfterProtocol = match[1];
    if (!everythingAfterProtocol) {
        return false;
    }
    if (localhostDomainRE.test(everythingAfterProtocol) ||
        nonLocalhostDomainRE.test(everythingAfterProtocol)) {
        return true;
    }
    return false;
}
exports.isUrl = isUrl;
/**
 *
 * @param {Any} data
 * @return {Boolean}
 */
function isString(data) {
    if (typeof data == "string") {
        return true;
    }
    else {
        return false;
    }
}
exports.isString = isString;
/**
 *
 * @param {Any} data
 * @return {Boolean}
 */
function isObject(data) {
    if (typeof data == "object") {
        return true;
    }
    else {
        return false;
    }
}
exports.isObject = isObject;
/**
 *
 * @param {Any} data
 * @return {Boolean}
 */
function isNumber(data) {
    if (typeof data == "number") {
        return true;
    }
    else {
        return false;
    }
}
exports.isNumber = isNumber;
/**
 *
 * @param {Any} data
 * @return {Boolean}
 */
function isBoolean(data) {
    if (typeof data == "boolean") {
        return true;
    }
    else {
        return false;
    }
}
exports.isBoolean = isBoolean;
//# sourceMappingURL=isUrl.js.map