class VigenereCipheringMachine {
  constructor(modification = true) {
    this.modification = modification;
  }

  alphabetLength = 26;
  asciiDiff = 97;

  _normalizeKey(length, key) {
    let result = key;
    let index = 0;

    for (let i = key.length; i < length; i++) {
      if (index === key.length) {
        index = 0;
      }
      result += key[index];
      index++;
    }

    return result;
  }

  encrypt(message, key) {
    if (!message || !key) throw Error("Error");

    let result = "";
    let normalizedKey = this._normalizeKey(
      message.replace(" ", "").length,
      key
    );
    let counter = 0;

    for (let i = 0; i < message.length; i++) {
      if (!/[A-Za-z]/g.test(message[i])) {
        result += message[i];
        counter++;
        continue;
      }
      result += String.fromCharCode(
        ((message.charCodeAt(i) +
          normalizedKey.charCodeAt(i - counter) -
          this.asciiDiff * 2) %
          this.alphabetLength) +
          this.asciiDiff
      );
    }

    return (this.modification
      ? result
      : result.split("").reverse().join("")
    ).toUpperCase();
  }

  decrypt(message, key) {
    if (!message || !key) throw Error("Error");

    let result = "";
    let normalizedKey = this._normalizeKey(
      message.replace(" ", "").length,
      key
    );
    let counter = 0;

    for (let i = 0; i < message.length; i++) {
      if (!/[A-Za-z]/g.test(message[i])) {
        result += message[i];
        counter++;
        continue;
      }
      result += String.fromCharCode(
        ((message.charCodeAt(i) +
          this.alphabetLength -
          normalizedKey.charCodeAt(i - counter) -
          this.asciiDiff * 2) %
          this.alphabetLength) +
          this.asciiDiff
      );
    }

    return (this.modification
      ? result
      : result.split("").reverse().join("")
    ).toUpperCase();
  }
}

module.exports = VigenereCipheringMachine;
// const directMachine = new VigenereCipheringMachine();
// assert.equal(
//   directMachine.encrypt("attack at dawn!", "alphonse"),
//   "AEIHQX SX DLLU!"
// );

// console.log(directMachine.encrypt("attack at dawn!", "alphonse"));
