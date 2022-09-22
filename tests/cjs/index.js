let { Bot } = require("../../lib/cjs/index.js");
let { WikiPedia } = Bot;

(async () => console.log(await WikiPedia({ query: "flower" })))();
