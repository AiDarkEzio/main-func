/* ═══════════════════════════════════════════════════════ //
=> If you want to recode, reupload,
=> or copy the codes/script,
=> pls give credit,
=> no credit? i will take action immediately.
==> Copyright (C) 2022 Dark_Ezio.
==> Licensed under the  MIT License;
===> you may not use this file except in compliance with the License.
=> Thank you to Lord Buddha, Family and Myself.
=> Whats Bot - Dark_Ezio.
// ════════════════════════════ */
import axios from "axios";
import * as cheerio from "cheerio";
export function styletext({ teks }) {
    return new Promise((resolve, reject) => {
        axios.get("http://qaz.wtf/u/convert.cgi?text=" + teks).then(({ data }) => {
            let $ = cheerio.load(data);
            let ezio = [];
            $("table > tbody > tr").each(function (a, b) {
                ezio.push({
                    name: $(b).find("td:nth-child(1) > span").text(),
                    result: $(b).find("td:nth-child(2)").text().trim(),
                });
            });
            resolve(ezio);
        }).catch(e => reject(e));
    });
}
//# sourceMappingURL=styleText.js.map