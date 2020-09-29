class VigenereCipheringMachine {
  constructor(modification = true) {
    this.modification = modification;
  }

  alphabetLength = 26;
  asciiDiff = 97;

  _normalizeKey(length, key) {
    let result = key.toLowerCase();
    let index = 0;

    for (let i = key.length; i < length; i++) {
      if (index === key.length) {
        index = 0;
      }
      result += result[index];
      index++;
    }

    return result;
  }

  encrypt(message, key) {
    if (!message || !key) throw Error("Error");

    let newMessage = message.toLowerCase();
    let result = "";
    let normalizedKey = this._normalizeKey(
      newMessage.replace(" ", "").length,
      key
    );
    let counter = 0;

    for (let i = 0; i < newMessage.length; i++) {
      if (!/[a-z]/g.test(newMessage[i])) {
        result += newMessage[i];
        counter++;
        continue;
      }
      result += String.fromCharCode(
        ((newMessage.charCodeAt(i) +
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

    let newMessage = message.toLowerCase();
    let result = "";
    let normalizedKey = this._normalizeKey(
      newMessage.replace(" ", "").length,
      key
    );
    let counter = 0;

    for (let i = 0; i < newMessage.length; i++) {
      if (!/[a-z]/g.test(newMessage[i])) {
        result += newMessage[i];
        counter++;
        continue;
      }
      if (normalizedKey.charCodeAt(i - counter) > newMessage.charCodeAt(i)) {
        result += String.fromCharCode(
          ((newMessage.charCodeAt(i) -
            normalizedKey.charCodeAt(i - counter) +
            26) %
            this.alphabetLength) +
            this.asciiDiff
        );
      } else
        result += String.fromCharCode(
          ((newMessage.charCodeAt(i) - normalizedKey.charCodeAt(i - counter)) %
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
