"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eBinary = exports.dBinary = void 0;
async function dBinary(str) {
    var newBin = str.split(" ");
    var binCode = [];
    for (let i = 0; i < newBin.length; i++) {
        binCode.push(String.fromCharCode(parseInt(newBin[i], 2)));
    }
    return binCode.join("");
}
exports.dBinary = dBinary;
async function eBinary(str) {
    let res = "";
    res = str.split("").map((char) => {
        return char.charCodeAt(0).toString(2);
    }).join(" ");
    return res;
}
exports.eBinary = eBinary;
//# sourceMappingURL=binary.js.map