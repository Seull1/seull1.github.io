const people = [ {
	name: "Mike Smith",
	family: {
		mother: "Jane Smith" , father: "Harry Smith",sister: "Samanha Smith"
	},
	age: 35
},{
	name: "Tom Jones",
	family: {
		mother: "Norah Jones", father: "Richard Jones",brother: "Howard Jones"
	},
	age:25
}];
for (let {name: n ,family: { father: f } } of people){
	console.log("Name: " + n + ", Father: " + f);
}
//Name: Mike Smith, Father: Harry Smith
//Name: Tom Jones, Father: Richard Jones

