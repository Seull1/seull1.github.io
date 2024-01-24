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

class Pizza extends Food('피자')

class chicken extends Food('치킨')

const pizza = new Pizza('피자');
const chicken = new Chicken('치킨');;

pizza.addbrand('피자헛');
chicken.addbrand('네네');
pizza.addbrand('미스터피자');
chicken.addbrand('훌랄라');


pizza.print();
chicken.print();
