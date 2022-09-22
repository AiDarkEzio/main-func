import { Bot } from '../../lib/cjs/index'
let { WikiPedia } = Bot;

(async () => console.log(await WikiPedia({query: 'flower'})))()