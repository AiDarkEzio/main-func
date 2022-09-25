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
export function wpsearch(query) {
    return new Promise((resolve, reject) => {
        axios
            .get(`https://www.wallpaperflare.com/search?wallpaper=${encodeURI(query)}`)
            .then(async ({ data }) => {
            const $ = cheerio.load(data);
            let outPut = [];
            $("#gallery > li > figure> a").each(function (i, cuk) {
                let text = $(cuk).find('img').attr('data-src');
                if (typeof text == 'string') {
                    outPut.push(text);
                }
            });
            resolve(outPut);
        })
            .catch(e => reject(e));
    });
}
//# sourceMappingURL=wallpaper.js.map