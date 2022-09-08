const sumAll = function(a, b) {
	/* This should work with regardless of 
	what integer you put in, but it's not to
	spec, we will comment it out, but keep it here 
	function abs(num) {return (num > 0)? num:(-1)*num;}
	let sum = a;range = a - b;
	if(range != 0) {
	  let sign = (range > 0) ? -1:1;
	  for(let i = 1;i <= abs(range);i++){
	    sum += a + sign*(i);
	  }
	}
	return sum;
	*/
	if(a < 0 || b < 0 || !Number.isInteger(a) || !Number.isInteger(b)){
	  return 'ERROR';
	}


	function abs(num) {return (num > 0)? num:(-1)*num;}
	let sum = a;range = a - b;
	if(range != 0) {
	  let sign = (range > 0) ? -1:1;
	  for(let i = 1;i <= abs(range);i++){
	    sum += a + sign*(i);
	  }
	}
	return sum;
};

// Do not edit below this line
module.exports = sumAll;
