const reverseString = function(string) {
  let reversed_string = [];
  for(let i = string.length - 1, j = 0; i >= 0; i--, j++){
     reversed_string[j] = string[i];
  }
  return reversed_string.join("");
};

// Do not edit below this line
module.exports = reverseString;
