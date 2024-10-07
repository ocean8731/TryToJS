/*
* copy by value : 값에 의한 전달
* copy by reference : 참조에 의한 전달
*
* js의 경우
* primitive type : copy by value
* reference type : copy by reference
*
* */

// copy by value
let original = "하이요"; // 0x00001
let clone = original; // 0x00003

console.log(original); // 하이요, 0x00001
console.log(clone); // 하이요, 0x00003

clone += " 요하이";
console.log("======================");
console.log(original); // 하이요, 0x00001
console.log(clone); // 하이요 요하이 ,0x00003

// copy by reference : 객체의 경우
let originalObj = {
    name: "kim",
    age: 20
}; // object의 주소는 0x00002, 변수 originalObj의 주소값은 0x00004이고, 내부에 들어있는 값이 0x00002
let cloneObj = originalObj; // 0x00005, 내부에 들어있는 값이 0x00002
console.log("======================");
console.log(originalObj); // { name: 'kim', age: 20 }
console.log(cloneObj); // { name: 'kim', age: 20 }

originalObj.age = 30; // 재할당을 통해 0x00002 주소 내부의 값이 변경됨
console.log("======================");
console.log(originalObj); // { name: 'kim', age: 30 }
console.log(cloneObj); // { name: 'kim', age: 30 }



const yuJin1 = {
    name: "yujin",
    age: 20
};
const yuJin2 = yuJin1;
const yuJin3 = {
    name: "yujin",
    age: 20
};

console.log(yuJin1 === yuJin2); // true. 같은 주소값을 가지고 있음.
/*
* yujin1의 object의 주소값이 1이라면 yujin1 변수에 들어있는 값이 1이고, 그 1을 통해 object를 찾아간다.
* yujin1 === yujin2 이므로, yujin2 변수에 들어있는 값도 1이다. 따라서 yujin1과 yujin2는 같은 object를 가리키고 있다.
* */

console.log(yuJin1 === yuJin3); // false. 다른 주소값을 가지고 있음
/*
* yujin3과 yujin1의 object는 내부적으로 같은 값이지만, 실제로는 다른 객체이다.
* */

/*
* Spread Operator : 값을 복사하는 연산자
*/
const yuJin4 = {
    ...yuJin3
};
console.log(yuJin4);
console.log(yuJin3 === yuJin4); // false. 새로운 객체를 생성하기 때문에 다른 주소값을 가지고 있음

const yuJin5 = {
    year : 2003,
    ...yuJin3
};
console.log(yujin5); // { year: 2003, name: 'yujin', age: 20 }

const yuJin6 = {
    name : "안유진",
    ...yuJin3
};
console.log(yuJin6); // { name: 'yujin', age: 20 } : 뒤에 들어온 yuJin3의 name이 덮어씌워짐

const yuJin7 = {
    ...yuJin3,
    name : "안유진"
};
console.log(yuJin7); // { name: '안유진', age: 20 } : 뒤에 들어온 name이 덮어씌워짐