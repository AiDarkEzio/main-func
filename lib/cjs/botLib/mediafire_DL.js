"use strict";
/* ═══════════════════════════════════════════════════════ //
=> If you want to recode, reupload,
=> or copy the codes/script,
=> pls give credit,
=> no credit? i will take action immediately.
==> Copyright (C) 2022 Dark_Ezio.
==> Licensed under the  MIT License;
===> you may not use this file except in compliance with the License.
=> Thank you to Lord Buddha, Family and Myself.
=> Main Func - Dark_Ezio.
// ════════════════════════════ */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mediafireDl = void 0;
const axios_1 = __importDefault(require("axios"));
const cheerio = __importStar(require("cheerio"));
async function mediafireDl({ url }) {
    const res = await axios_1.default.get(url);
    const $ = cheerio.load(res.data);
    const link = $("a#downloadButton").attr("href");
    const size = $("a#downloadButton")
        .text().replace("Download", "")
        .replace("(", "").replace(")", "")
        .replace("\n", "").replace("\n", "")
        .replace("                         ", "");
    const seplit = link === null || link === void 0 ? void 0 : link.split("/");
    const name = seplit === null || seplit === void 0 ? void 0 : seplit[5];
    let mime = name === null || name === void 0 ? void 0 : name.split(".")[1];
    return ({ name, mime, size, link });
}
exports.mediafireDl = mediafireDl;
//# sourceMappingURL=mediafire_DL.js.map