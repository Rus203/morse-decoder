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
    let morseCode = [];

  let convertToSymbol = (nums) =>
    {
      let res = '';

      for(let i = 0; i < nums.length; i = i + 2)
      {
        if(nums[i] === '1' && nums[i + 1] === '0')
        {
          res += '.';
        }

        else if(nums[i] === '1' && nums[i + 1] === '1')
        {
          res += '-';
        }

        else if (nums[i] === '*')
        {
          res = ' ';
        }
      }
      return res;
    }

  let convertToWord = chars => 
  {
    return chars === ' ' ? ' ' : MORSE_TABLE[chars];
  };

  for(let x1 = 0, x2 = 10; x2 <= expr.length; x1 = x1 + 10, x2 = x2 + 10)
  {
    let char = expr.substring(x1, x2);
    morseCode.push(convertToWord(convertToSymbol(char)));
  }
  
  return morseCode.join('');
}

module.exports = {
    decode
}