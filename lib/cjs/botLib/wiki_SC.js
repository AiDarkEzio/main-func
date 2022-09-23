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
exports.WikiMedia = exports.WikiPedia = void 0;
const axios_1 = __importDefault(require("axios"));
const cheerio = __importStar(require("cheerio"));
async function WikiPedia({ query }) {
    const res = await axios_1.default.get(`https://en.m.wikipedia.org/w/index.php?search=${query}`);
    const $ = cheerio.load(res.data);
    let wiki = $("#mf-section-0").find("p").text();
    let thumb = $("#mf-section-0")
        .find("div > div > a > img")
        .attr("src");
    thumb = thumb ? thumb : "//pngimg.com/uploads/wikipedia/wikipedia_PNG35.png";
    thumb = "https:" + thumb;
    let title = $("h1#section_0").text() || query;
    return { wiki, thumb, title };
}
exports.WikiPedia = WikiPedia;
async function WikiMedia({ title: query }) {
    return new Promise((resolve, reject) => {
        axios_1.default
            .get(`https://commons.wikimedia.org/w/index.php?search=${query}&title=Special:MediaSearch&go=Go&type=image`)
            .then((res) => {
            let $ = cheerio.load(res.data);
            let ezio = [];
            $(".sdms-search-results__list-wrapper > div > a").each(function (a, b) {
                var _a, _b, _c, _d;
                ezio.push({
                    title: (_a = $(b).find("img").attr("alt")) === null || _a === void 0 ? void 0 : _a.toString(),
                    source: (_b = $(b).attr("href")) === null || _b === void 0 ? void 0 : _b.toString(),
                    image: ((_c = $(b).find("img").attr("data-src")) === null || _c === void 0 ? void 0 : _c.toString()) || ((_d = $(b).find("img").attr("src")) === null || _d === void 0 ? void 0 : _d.toString()),
                });
            });
            resolve(ezio);
        }).catch(e => reject(e));
    });
}
exports.WikiMedia = WikiMedia;
//# sourceMappingURL=wiki_SC.js.map