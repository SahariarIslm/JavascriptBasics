// faster/easier way to access/unpack variables from arrays, objects (later video):

const bob = {
	first:'bob',
	last:'sanders',
	city:'chicago',
	siblings:{
		sister:'jane',
	},
};

// const firstName = bob.first;
// const lastName = bob.last;
// const sister = bob.siblings.sister;


const {first:firstName,last,city,siblings:{sister:faboriteSibling}} = bob;

// console.log(firstName,last,city,faboriteSibling);

function printPerson({first,last,city,siblings:{sister}}){
	// const {first,last} = person
	console.log(first,last,sister)
}

printPerson(bob);