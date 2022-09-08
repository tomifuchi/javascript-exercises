const fibonacci = function(n) {
	n = Number(n);
	if(n >= 0) {
	  switch (n) {
	    case 1: return 1;
	    case 2: return 1;
	    default: return (fibonacci(n-2) + fibonacci(n-1));
	  }
	}
	else return 'OOPS';
};

// Do not edit below this line
module.exports = fibonacci;
