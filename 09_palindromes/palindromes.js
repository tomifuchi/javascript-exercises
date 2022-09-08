const palindromes = function (str) {

reverseString = function(string) {
  let reversed_string = [];
  for(let i = string.length - 1, j = 0; i >= 0; i--, j++){
     reversed_string[j] = string[i];
  }
  return reversed_string.join("");
};

//Collects characters only. Ignores symbols and space.
collect_string = function(string){
  let string_with_no_symbol = [];
  for(let i = 0,j = 0;i <= string.length - 1;i++){
    if( (string[i] >= 'A' && string[i] <= 'Z') || (string[i] >= 'a' && string[i] <= 'z') )
    string_with_no_symbol[j++] = string[i]; 
  }
  return string_with_no_symbol.join("").toLowerCase();
}
  return (collect_string(str) == reverseString(collect_string(str)));
};

// Do not edit below this line
module.exports = palindromes;
