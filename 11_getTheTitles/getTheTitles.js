const getTheTitles = function(arr) {
	let titles = [];
	arr.forEach( (element) => {
	  titles.push(element.title)
	});
	return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
