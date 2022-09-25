// copped by https://github.com/segmentio/is-url
var protocolAndDomainRE = /^(?:\w+:)?\/\/(\S+)$/;
var localhostDomainRE = /^localhost[\:?\d]*(?:[^\:?\d]\S*)?$/;
var nonLocalhostDomainRE = /^[^\s\.]+\.\S{2,}$/;
/**
 * Loosely validate a URL `string`.
 *
 * @param {String} string
 * @return {Boolean}
 */
export function isUrl(string) {
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
/**
 *
 * @param {Any} data
 * @return {Boolean}
 */
export function isString(data) {
    if (typeof data == "string") {
        return true;
    }
    else {
        return false;
    }
}
/**
 *
 * @param {Any} data
 * @return {Boolean}
 */
export function isObject(data) {
    if (typeof data == "object") {
        return true;
    }
    else {
        return false;
    }
}
/**
 *
 * @param {Any} data
 * @return {Boolean}
 */
export function isNumber(data) {
    if (typeof data == "number") {
        return true;
    }
    else {
        return false;
    }
}
/**
 *
 * @param {Any} data
 * @return {Boolean}
 */
export function isBoolean(data) {
    if (typeof data == "boolean") {
        return true;
    }
    else {
        return false;
    }
}
//# sourceMappingURL=isUrl.js.map