class Food {
	constructor(name) {
		this.name = name;
		this.brands = [];
	}
	addBrand(brand) {
		this.brands.push(brand);
	}
	print() {
		console.log(`${this.name}을/를 파는 음식점들:`);
		console.log(this.brands.join(', '));
	}
}


const pizza = new Food('피자');
const chicken = new Food('치킨');;

pizza.addBrand('피자헛');
chicken.addBrand('네네');
pizza.addBrand('미스터피자');
chicken.addBrand('훌랄라');


pizza.print();
chicken.print();
