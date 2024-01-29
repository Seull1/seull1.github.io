const foo = ["one","two","three"];
const [one,two,three] = foo;
console.log(one,two,three); // one two three

const o ={p:42, q: true};
console.log(o); //{ p: 42, q: true }
const {p,q} = o ;
console.log(o);  //{ p: 42, q: true }
console.log(p,q);  //42  true
