const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const arr = []
    for (let i = 0; i < expr.length; i += 10) {
      arr.push(expr.substring(i, i + 10));
    }

    const arrWithoutLeadingZeroes = [];
    for (let i = 0; i < arr.length; i += 1) {
      arrWithoutLeadingZeroes.push(arr[i].slice(arr[i].indexOf('1')));
    }

    const arrWithDotsAndDashes = [];
    let tempStr = '';
    for (let i = 0; i < arrWithoutLeadingZeroes.length; i += 1) {
      tempStr = '';
      for (let j = 0; j < arrWithoutLeadingZeroes[i].length; j += 2) {
        if((arrWithoutLeadingZeroes[i][j] === '1') && (arrWithoutLeadingZeroes[i][j + 1] === '0')) tempStr = `${tempStr}.`;
        if((arrWithoutLeadingZeroes[i][j] === '1') && (arrWithoutLeadingZeroes[i][j + 1] === '1')) tempStr = `${tempStr}-`
      }
      arrWithDotsAndDashes.push(tempStr);
    }

    const arrWithLetters = [];
    for (let i = 0; i < arrWithDotsAndDashes.length; i += 1) {
      if (MORSE_TABLE[arrWithDotsAndDashes[i]] === undefined) arrWithLetters.push(' ');
      else arrWithLetters.push(MORSE_TABLE[arrWithDotsAndDashes[i]]);
    }

    let strDecoded = '';
    for (let i = 0; i < arrWithLetters.length; i += 1) {
      strDecoded = `${strDecoded}${arrWithLetters[i]}`;
    }

    return strDecoded;
  }

module.exports = {
    decode
}