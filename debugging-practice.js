let users = [
	{id: 'john', name: "John Smith", age: 20},
	{id: 'ann', name: "Ann Smith", age: 24},
	{id: 'pete', name: "Pete Peterson", age: 31},
];

let usersById = groupById(users);
console.log(usersById);

function groupById(array) {
	return array.reduce((obj, item) => {
		obj[item.id] = item;
		return obj
	}, {})
}

// console.log(users[0].id);


debugger;