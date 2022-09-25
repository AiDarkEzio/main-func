"use strict";
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
exports.happymod = exports.apkmody = exports.moddroid = void 0;
const axios_1 = __importDefault(require("axios"));
const cheerio = __importStar(require("cheerio"));
function moddroid(query) {
    return new Promise((resolve, reject) => {
        axios_1.default.get(`https://moddroid.com/?s=${encodeURI(query)}`)
            .then(({ data }) => {
            const $ = cheerio.load(data);
            let outPut = [];
            $("div.col-12.col-md-6.mb-4").each(function (c, d) {
                outPut.push({
                    author: "AiDarkEzio",
                    name: $(d).find("div > h3.h5.font-weight-semibold.text-truncate.text-primary.w-100").text().trim(),
                    link: $(d).find("a.d-flex.position-relative.archive-post").attr("href"),
                    img: $(d).find("div.flex-shrink-0.mr-2 > img").attr("src"),
                    desc: $(d).find("div.text-truncate.text-muted > span.align-middle").text(),
                });
            });
            resolve(outPut);
        })
            .catch((e) => reject(e));
    });
}
exports.moddroid = moddroid;
function apkmody(query) {
    return new Promise((resolve, reject) => {
        axios_1.default.get(`https://apkmody.io/?s=${encodeURI(query)}`)
            .then(({ data }) => {
            const $ = cheerio.load(data);
            let outPut = [];
            $("div.flex-item").each(function (c, d) {
                outPut.push({
                    author: "AiDarkEzio",
                    name: $(d).find("div.card-title > h2.truncate").text(),
                    desc: $(d).find("div.card-body > p.card-excerpt.has-small-font-size.truncate").text().trim(),
                    img: $(d).find("div.card-image > img").attr("src"),
                    link: $(d).find("article.card.has-shadow.clickable > a").attr("href")
                });
            });
            resolve(outPut);
        }).catch(e => reject(e));
    });
}
exports.apkmody = apkmody;
function happymod(query) {
    return new Promise((resolve, reject) => {
        axios_1.default
            .get(`https://www.happymod.com/search.html?q=${encodeURI(query)}`)
            .then(async ({ data }) => {
            const $ = cheerio.load(data);
            let hasil = [];
            $("div.pdt-app-box").each(function (c, d) {
                hasil.push({
                    author: "AiDarkEzio",
                    name: $(d).find("a").text().trim(),
                    icon: $(d).find("img.lazy").attr("data-original"),
                    link: $(d).find("a").attr("href"),
                    link2: `https://www.happymod.com${$(d).find("a").attr("href")}`,
                });
            });
            resolve(hasil);
        })
            .catch(reject);
    });
}
exports.happymod = happymod;
//# sourceMappingURL=apk.js.map