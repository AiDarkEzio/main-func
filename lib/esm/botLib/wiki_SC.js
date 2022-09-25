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
import axios from "axios";
import * as cheerio from "cheerio";
export async function WikiPedia(Title) {
    const res = await axios.get(`https://en.m.wikipedia.org/w/index.php?search=${encodeURI(Title)}`);
    const $ = cheerio.load(res.data);
    let wiki = $("#mf-section-0").find("p").text();
    let thumb = $("#mf-section-0")
        .find("div > div > a > img")
        .attr("src");
    thumb = thumb ? thumb : "//pngimg.com/uploads/wikipedia/wikipedia_PNG35.png";
    thumb = "https:" + thumb;
    let title = $("h1#section_0").text() || Title;
    return { wiki, thumb, title };
}
export async function WikiMedia(Title) {
    return new Promise((resolve, reject) => {
        axios
            .get(`https://commons.wikimedia.org/w/index.php?search=${encodeURI(Title)}&title=Special:MediaSearch&go=Go&type=image`)
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
//# sourceMappingURL=wiki_SC.js.map