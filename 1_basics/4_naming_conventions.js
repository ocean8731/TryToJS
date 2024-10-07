/*
* Naming Convention 1
*
* 변수 이름 짓기
* 1. 일반적으로 영어를 사용하면 문자와 숫자를 모두 사용
* 2. 특수 기호는 언더스코어와 달러
* 3. 숫자로 이름을 시작할 수 없다. ex) 1name
* 4. 키워드는 변수명으로 사용할 수 없다. ex) var const = "var"; 이면 변수명으로 const는 사용 불가
*/
let code = 123;
var $code = 123;
const _code = 123;

console.log(code);
console.log($code);
console.log(_code);

/*
* Naming Convention 2
*
* 변수 이름 짓기
* 1. camelCase
* 2. snake_case : only 소문자, 주로 python에서 사용
* 3. PascalCase : C# 등의 MS계열 언어에서 사용
* 4. 키워드는 변수명으로 사용할 수 없다. ex) var const = "var"; 이면 변수명으로 const는 사용 불가
*/
const aYuJin = "안유진"; // camelCase
console.log(aYuJin);