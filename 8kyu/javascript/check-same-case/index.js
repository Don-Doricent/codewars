// Kata: check-same-case

// Prompt: <PASTE PROMPT HERE>

/* Write a function that will check if two given characters are the same case.

If either of the characters is not a letter, return -1
If both characters are the same case, return 1
If both characters are letters, but not the same case, return 0
Examples
'a' and 'g' returns 1

'A' and 'C' returns 1

'b' and 'G' returns 0

'B' and 'g' returns 0

'0' and '?' returns -1 */ 

function sameCase(a, b) {
    if (!isLetter(a) || !isLetter(b)) {
      return -1;
    }
    if ((isUpperCase(a) && isUpperCase(b)) || (isLowerCase(a) && isLowerCase(b))) {
      return 1;
    }
    return 0;
  }
  
  function isLetter(c) {
    return c.toLowerCase() !== c.toUpperCase();
  }
  
  function isUpperCase(c) {
    return c === c.toUpperCase();
  }
  
  function isLowerCase(c) {
    return c === c.toLowerCase();
  }
