class Food{
	constructor(name){
		this.name = name;
		this.brands - [];
	}
	addBrand(brand){
		this.brand.push(brand)
	}

	print(){
		console.log(`${this.name}을/를 파는 음식점들 : `)
		console.log(this.brands.join(', '));
	}
}

class Pizza extends Food{
	constructor(name,brands){
	}
}

class Chicken extends Food{
	constructor(name,brands){
	}
}

const pizza = new Pizza('피자헛');
const chicken = new Chicken('굽네');;


pizza.print();
chicken.print();
