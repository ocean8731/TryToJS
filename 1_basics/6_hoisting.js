/*
* Hoisting
* 모든 변수 선언문이 코드의 최상단으로 이동되는 것처럼 느껴지는 것
*/
// example of var : can compile but not recommended
console.log(name); // undefined
var name = "안유진";
console.log(name);
// example of let : can't compile
// console.log(name1); // Error: Cannot access 'name1' before initialization
let name1 = "장원영";
console.log(name1);
// console.log(name2); // Error: Cname2 is not defined

// example of const
// console.log(name3); // Error: Cannot access 'name3' before initialization
const name3 = "최유정";
console.log(name3);
/*
 let와 const를 사용하면 값이 초기화되기 전에 접근하려고 하면 에러가 발생한다. 따라서 hoisting으로 인해 발생하는 문제를 방지할 수 있다.
 반면에 var는 hoisting으로 인해 발생하는 문제를 방지하지 못한다.
 주의할 점은 무엇을 사용하는 hoisting 자체는 발생한다는 것이다.
 */

// example of function
console.log(add(1, 2)); // 3
function add(a, b) {
    return a + b;
}
console.log(add(3, 4)); // 7
// console.log(add1(1, 2)); // Error: Cannot access 'add1' before initialization
const add1 = function(a, b) {
    return a + b;
};
console.log(add1(3, 4)); // 7