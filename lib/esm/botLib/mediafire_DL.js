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
export async function mediafireDl({ url }) {
    const res = await axios.get(url);
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
//# sourceMappingURL=mediafire_DL.js.map