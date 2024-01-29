let a , b;
//{a , b} = {a:1, b:2};  //에러
// Unexpected token =
// 코드 블록 블록으로 간주하기 때문에 표현식으로 되도록 괄호로 감싸주기
({a,b} = {a:1 , b:2});
console.log(a,b);
// 1 2

