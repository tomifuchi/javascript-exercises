const add = function(a, b) {
	return (a + b);
};

const subtract = function(a, b) {
	return (a - b);
};

//Able to take arrary
const sum = function(arr) {
	let sum = 0;
	for(let i = 0; i <= arr.length - 1; i++){
	  sum += arr[i];
	}
	return sum;
};


//Able to take arrary aswel
const multiply = function(arr){
	if (arr.length - 1 > 0){
	  let result =  1;
	  for(let i = 0; i <= arr.length - 1; i++){
	    result *= arr[i];
	  }
	  return result;
	}
	else return -1;
};

const power = function(a, n) {
	if (a != 0 && n > 0){
	  for(let i = 1,step = a;i < n;i++){
	    a *= step;
	  }
	}
	return a;
};

const factorial = function(a) {
	if (a >= 0){
	return (a == 0) ? 1: a*factorial(a-1);
	} else return -1;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
