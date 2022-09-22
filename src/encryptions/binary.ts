export async function dBinary(str: string): Promise<string> {
  var newBin = str.split(" ");
  var binCode = [];
  for (let i = 0; i < newBin.length; i++) {
    binCode.push(String.fromCharCode(parseInt(newBin[i], 2)));
  }
  return binCode.join("");
}

export async function eBinary(str: string): Promise<string> {
  let res = "";
  res = str.split("").map((char) => {
    return char.charCodeAt(0).toString(2);
  }).join(" ");
  return res;
}