const foo = ["one",'two','three'];
console.log(foo);
const [one,two,three] = foo;
console.log(foo);
console.log(one,two,three);

console.log('================');

const o = {p: 42, q:true};
console.log(o);
const {p,q}= o ;
console.log (o);
console.log(p,q);
