import { Bot } from "../../lib/esm/index.js";
let { WikiMedia } = Bot;

(async () => console.log(await WikiMedia({ title: "flower" })))();