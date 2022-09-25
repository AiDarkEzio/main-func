import axios from "axios";
import * as cheerio from "cheerio";

export function moddroid(query: string): Promise<{ author: string; name: string; link?: string; img?: string; desc: string;}[]> {
  return new Promise((resolve, reject) => {
    axios.get(`https://moddroid.com/?s=${encodeURI(query)}`)
      .then(({ data }) => {
        const $ = cheerio.load(data);
        let outPut: {
          author: string;
          name: string;
          link?: string;
          img?: string;
          desc: string;
        }[] = [];
        $("div.col-12.col-md-6.mb-4").each(function (c: any, d: any) {
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

export function apkmody(query: string): Promise<{ author: string; name: string; link?: string; img?: string; desc: string;}[]> {
  return new Promise((resolve, reject) => {
    axios.get(`https://apkmody.io/?s=${encodeURI(query)}`)
      .then(({ data }) => {
        const $ = cheerio.load(data);
        let outPut: {
          author: string;
          name: string;
          link?: string;
          img?: string;
          desc: string;
        }[] = [];
        $("div.flex-item").each(function (c, d) {
          outPut.push({
            author: "AiDarkEzio",
            name: $(d).find("div.card-title > h2.truncate").text(),
            desc: $(d).find("div.card-body > p.card-excerpt.has-small-font-size.truncate").text().trim(),
            img: $(d).find("div.card-image > img").attr("src"),
            link: $(d).find("article.card.has-shadow.clickable > a").attr("href")
          })
        });
        resolve(outPut);
      }).catch(e => reject(e));
  });
}

export function happymod(query: string): Promise<{author: string;name: string;icon?: string;link?: string;link2: string;}[]> {
  return new Promise((resolve, reject) => {
    axios
      .get(`https://www.happymod.com/search.html?q=${encodeURI(query)}`)
      .then(async ({ data }) => {
        const $ = cheerio.load(data);
        let hasil: {
          author: string;
          name: string;
          icon?: string;
          link?: string;
          link2: string;
        }[] = [];
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