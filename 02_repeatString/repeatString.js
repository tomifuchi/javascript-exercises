const repeatString = function(string, num) {
	if(num <= 0)
	  return (num == 0) ? '':'ERROR';
	  else if (string == '')
	  return '';
	  else
 	  return string.repeat(num);
};

// Do not edit below this line
module.exports = repeatString;
