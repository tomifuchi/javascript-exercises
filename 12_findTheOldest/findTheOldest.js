const findTheOldest = function(arr) {
	let oldest_people, max_age = 0;
	arr.forEach( (person) => {
	  let age;
	  if(person.yearOfDeath === undefined){
	    const today = new Date();
	    const year = today.getFullYear();
	    age = year - person.yearOfBirth;
	  } else {
	    age = person.yearOfDeath - person.yearOfBirth;
	  }

	  if (age >= max_age){
	    max_age = age;
	    oldest_people = person;
	  } 
	});
	return oldest_people;
};

// Do not edit below this line
module.exports = findTheOldest;
