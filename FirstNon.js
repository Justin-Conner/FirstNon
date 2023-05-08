function FirstNon(str) {
  let charCount = {};

  // Count the occurrences of each character
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }

  // Find the first non-repeating character
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (charCount[char] === 1) {
      return char;
    }
  }

  // No non-repeating characters found
  return null;
}
