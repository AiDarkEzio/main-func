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

export async function WikiPedia(Title: string): Promise<{ wiki: string; thumb: string; title: string; }> {
  const res = await axios.get(`https://en.m.wikipedia.org/w/index.php?search=${encodeURI(Title)}`);
  const $ = cheerio.load(res.data);
  let wiki: string = $("#mf-section-0").find("p").text();
  let thumb: string | undefined = $("#mf-section-0")
    .find("div > div > a > img")
    .attr("src");
  thumb = thumb ? thumb : "//pngimg.com/uploads/wikipedia/wikipedia_PNG35.png";
  thumb = "https:" + thumb;
  let title: string = $("h1#section_0").text() || Title;
  return { wiki, thumb, title };
}

export async function WikiMedia(Title: string): Promise<{ title: string | undefined; source:string | undefined; image: string | undefined;}[]> {
  return new Promise((resolve, reject) => {
    axios
      .get( `https://commons.wikimedia.org/w/index.php?search=${encodeURI(Title)}&title=Special:MediaSearch&go=Go&type=image` )
      .then((res) => {
        let $ = cheerio.load(res.data);
        let ezio: { title: string | undefined; source:string | undefined; image: string | undefined;}[] = [];
        $(".sdms-search-results__list-wrapper > div > a").each(function (a, b) {
          ezio.push({
            title: $(b).find("img").attr("alt")?.toString(),
            source: $(b).attr("href")?.toString(),
            image: $(b).find("img").attr("data-src")?.toString() || $(b).find("img").attr("src")?.toString(),
          });
        });
        resolve(ezio);  
      }).catch(e => reject(e) );
  });
}
