/*
* Data Types
*
* 6 Primitive Data Types
* 1. Number
* 2. String
* 3. Boolean
* 4. Undefined
* 5. Null
* 6. Symbol
*
*
* Object Data Type
* 1. Function
* 2. Array
* 3. Object
*
* 타입 선언 방식
* 1. static typing : 변수 선언 시 타입을 명시
* 2. dynamic typing : 변수 선언 시 타입을 명시하지 않음(type inference 사용)
* 3. JS는 dynamic typing
*/

/*
* Number Type
*/
const age = 20;
const temp = 20.5;
const pi = 3.14;

console.log(typeof age);
console.log(typeof temp);
console.log(typeof pi);
console.log("======================");

// infinity
const infinity = Infinity;
const nInfinity = -Infinity;

console.log(typeof infinity);
console.log(typeof nInfinity);

/*
* String Type
* Template Literal : ` `
*
* Escape Character
* 1. newline -> \n
* 2. tab -> \t
* 3. 백슬래시를 string으로 표현하려면 \\ 사용
*/
const name = "아이브\n안유진";
console.log(name);
const name1 = "아이브\t장원영";
console.log(name1);
const name2 = "아이브\\안유진";
console.log(name2);
const name3 = "아이브\'안유진";
console.log(name3);

const name4 = `아이브  안유진`;
const name5 = `아이브
안유진`;
console.log(name4);
console.log(name5);
// template literal
const greeting = `Hello, ${name4}`;
console.log(greeting);
const groupName = "아이브";
// not template literal
console.log(groupName +' 입니다.');

/*
* Boolean Type
*/
const isTrue = true;
const isFalse = false;
console.log(typeof isTrue);
console.log(typeof isFalse);

/*
* Undefined Type
* 사용자가 직접 값을 초기화하지 않았을 때 지정되는 타입
* 지양하자.
 */
let x;
console.log(x);
console.log(typeof x);

/*
* Null Type
* 값이 없다는 것은 Undefined와 같으나
* 개발자가 값이 없다는 것을 명시적으로 표현할 때 사용
*/
let initValue = null;
console.log(initValue);
console.log(typeof initValue);
/*
* Symbol type
* 유일한 값을 만들 때 사용
* Symbol() 함수를 사용하여 생성
*/

const test1 = '1';
const test2 = '1';
console.log(test1 === test2); // true
const symbol1 = Symbol('1');
const symbol2 = Symbol('1');
console.log(symbol1 === symbol2); // false
/*
* Object Type
* Like Python Dictionary & Java Map : key-value pair
*/
const dictionary = {
    red : "빨간색",
    yellow : "노란색",
    blue : "파란색"
}
console.log(dictionary);
console.log(dictionary.red);
console.log(dictionary['yellow']);
console.log(typeof dictionary);
console.log(typeof dictionary.yellow);

/*
* Array Type
* List in Python
*/
const colors = ['red', 'yellow', 'blue'];
console.log(colors);
/*
* index
* 0부터 시작해 1씩 증가
* */
console.log(colors[0]);
console.log(colors[1]);
console.log(colors[2]);
// 값 바꾸기
colors[0] = 'black';
console.log(colors[0]); // black
console.log(typeof colors);