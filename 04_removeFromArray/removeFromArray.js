const removeFromArray = function(arr, ...rem_elements) {
	if ( arr.length > 0 ){
	rem_elements.forEach( (element) => {
	  let index = arr.indexOf(element);
	  if ( index > -1 ){
	    arr.splice(index,1);
	  }
	});
	}
	return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
