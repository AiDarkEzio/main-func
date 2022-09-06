module.exports = {
  toBase64: require("./base64").toBase64,
  Base64ToString: require("./base64").fromBase64ToString,
  randomUUID: require("./crypto").randomUUID,
  randomBytes: require("./crypto").randomBytes,
  textEncode: require("./textEncode").textEncode,
  textDecode: require("./textEncode").textDecode,
};
