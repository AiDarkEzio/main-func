let CODE = {
  I2$: {
    A: ["A", "N"],
    a: ["a", "n"],
    B: ["B", "o"],
    b: ["b", "O"],
    C: ["C", "I"],
    c: ["c", "i"],
    D: ["D", "s"],
    d: ["d", "S"],
    E: ["E", "H"],
    e: ["e", "h"],
    F: ["F", "r"],
    f: ["f", "R"],
    G: ["G", "C"],
    g: ["g", "c"],
    H: ["H", "Z"],
    h: ["h", "z"],
    I: ["I", "q"],
    i: ["i", "Q"],
    J: ["J", "x"],
    j: ["j", "X"],
    K: ["K", "a"],
    k: ["k", "A"],
    L: ["L", "f"],
    l: ["l", "F"],
    M: ["M", "P"],
    m: ["m", "p"],
    N: ["N", "Y"],
    n: ["n", "y"],
    O: ["O", "B"],
    o: ["o", "b"],
    P: ["P", "K"],
    p: ["p", "k"],
    Q: ["Q", "G"],
    q: ["q", "g"],
    R: ["R", "w"],
    r: ["r", "W"],
    S: ["S", "J"],
    s: ["s", "j"],
    T: ["T", "v"],
    t: ["t", "V"],
    U: ["U", "d"],
    u: ["u", "D"],
    V: ["V", "U"],
    v: ["v", "u"],
    W: ["W", "T"],
    w: ["w", "t"],
    X: ["X", "e"],
    x: ["x", "E"],
    Y: ["Y", "M"],
    y: ["y", "m"],
    Z: ["Z", "l"],
    z: ["z", "L"],
    0: ["0", "8"],
    1: ["1", "5"],
    2: ["2", "3"],
    3: ["3", "2"],
    4: ["4", "9"],
    5: ["5", "2"],
    6: ["6", "4"],
    7: ["7", "6"],
    8: ["8", "1"],
    9: ["9", "7"],
  },
};

module.exports.textEncode = (text) => {
  if (!(typeof text == "string")) throw new TypeError("Only string valid");
  let type = "I2$";
  let encodedText = "";
  for (let i in text) {
    // console.log(CODE[type][text[i]]);
    CODE[type][text[i]]
      ? (encodedText += CODE[type][text[i]][1])
      : (encodedText += text[i]);
  }
  return encodedText;
};
module.exports.textDecode = (text) => {
  if (!(typeof text == "string")) throw new TypeError("Only string valid");
  let type = "I2$";
  let decodedText = "";
  let got = false;
  for (let i in text) {
    if (got) return;
    for (let item in CODE[type]) {
      if (CODE[type][item][1] == text[i]) {
        decodedText += CODE[type][item][0];
        got = true;
      }
    }
    !got ? (decodedText += text[i]) : "";
    got = false;
  }
  return decodedText;
};
