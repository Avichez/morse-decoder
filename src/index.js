const MORSE_TABLE = {
    ".-": "a",
    "-...": "b",
    "-.-.": "c",
    "-..": "d",
    ".": "e",
    "..-.": "f",
    "--.": "g",
    "....": "h",
    "..": "i",
    ".---": "j",
    "-.-": "k",
    ".-..": "l",
    "--": "m",
    "-.": "n",
    "---": "o",
    ".--.": "p",
    "--.-": "q",
    ".-.": "r",
    "...": "s",
    "-": "t",
    "..-": "u",
    "...-": "v",
    ".--": "w",
    "-..-": "x",
    "-.--": "y",
    "--..": "z",
    ".----": "1",
    "..---": "2",
    "...--": "3",
    "....-": "4",
    ".....": "5",
    "-....": "6",
    "--...": "7",
    "---..": "8",
    "----.": "9",
    "-----": "0",
    "**********": " ",
};

function decode(expr) {
    const numbersArray = expr.match(/.{1,10}/g);
    const morseCode = [];
    for (let i = 0; i < numbersArray.length; i++) {
        morseCode.push(numbersArray[i].replace(/10/g, ".").replace(/11/g, "-").replace(/0/g, ""));
    }
    const encodedWords = morseCode.map((morse) => MORSE_TABLE[morse]).join("");
    return encodedWords;
}

module.exports = {
    decode,
};
