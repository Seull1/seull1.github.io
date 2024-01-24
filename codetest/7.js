function Animal(type,name,sound){
	this.type = type;
	this.name = name;
	this.sound = sound;
	this.say = function() {
		console.log(this.sound);
	};

	var gubun="동물";
}

const dog = new Animal('개','멍멍이','사자');
const cat = new Animal('고양이','야옹이','호랑이');

dog.say()
cat.say()

console.log('=================');

console.log(dog.sharedValue);

console.log(cat.sharedValue);

console.log(dog.gubun);
