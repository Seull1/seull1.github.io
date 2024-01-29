const {a,b,...rest} = {a:10,b:20,c:30,d:20,c:30,d:40};
console.log(a,b);  //10 20
console.log(rest)  // {c:30,b:40};

