/**
 * Array Functions
 */
let iveMembers = [
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서',
];

console.log(iveMembers);

// push() : 값을 마지막 인덱스에 추가
// return 값은 배열의 길이
console.log(iveMembers.push('코드팩토리')); // 7
console.log(iveMembers); // ['안유진', '가을', '레이', '장원영', '리즈', '이서', '코드팩토리']

console.log('---------------_');
// pop() : 마지막 인덱스의 값을 제거
// return 값은 제거된 값
console.log(iveMembers.pop()); // '코드팩토리'
console.log(iveMembers); // ['안유진', '가을', '레이', '장원영', '리즈', '이서']

console.log('---------------_');
// shift() : 첫번째 인덱스의 값을 제거
// return 값은 제거된 값
console.log(iveMembers.shift()); // '안유진'
console.log(iveMembers); // ['가을', '레이', '장원영', '리즈', '이서']

// unshift() : 첫번째 인덱스에 값을 추가
// return 값은 배열의 길이
console.log(iveMembers.unshift('안유진')); // 6
console.log(iveMembers); // ['안유진', '가을', '레이', '장원영', '리즈', '이서']

console.log('---------------_');

// splice() : splice(시작인덱스, 제거할 개수)
// return 값은 제거된 값
console.log(iveMembers.splice(0, 3)) // ['안유진', '가을', '레이']
console.log(iveMembers); // ['장원영', '리즈', '이서']

iveMembers = [
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서',
];

console.log(iveMembers);

// concat()
console.log(iveMembers.concat('코드팩토리')); // ['안유진', '가을', '레이', '장원영', '리즈', '이서', '코드팩토리']
console.log(iveMembers); // ['안유진', '가을', '레이', '장원영', '리즈', '이서']

// slice()
console.log(iveMembers.slice(0, 3)); // ['안유진', '가을', '레이']
console.log(iveMembers); // ['안유진', '가을', '레이', '장원영', '리즈', '이서']

// spread operator
let iveMembers2 = [
    ...iveMembers,
];
console.log(iveMembers2); // ['안유진', '가을', '레이', '장원영', '리즈', '이서']

let iveMembers3 = [
    iveMembers,
];
console.log(iveMembers3); // [['안유진', '가을', '레이', '장원영', '리즈', '이서']]


console.log('--------------');
let iveMembers4 = iveMembers;

console.log(iveMembers4);
console.log(iveMembers4 === iveMembers); // true

console.log([
    ...iveMembers,
] === iveMembers); // false

// join()
console.log(iveMembers.join()); // '안유진,가을,레이,장원영,리즈,이서'
console.log(iveMembers.join('/')); // '안유진/가을/레이/장원영/리즈/이서'
console.log(iveMembers.join(', ')); // '안유진, 가을, 레이, 장원영, 리즈, 이서'

// sort()
// 오름차순
iveMembers.sort();
console.log(iveMembers); // ['가을', '레이', '리즈', '안유진', '이서', '장원영']

console.log(iveMembers.reverse()); // ['장원영', '이서', '안유진', '리즈', '레이', '가을']

let numbers = [
    1,
    9,
    7,
    5,
    3,
];
console.log(numbers);

// a, b를 비교했을때
// 1) a를 b 보다 나중에 정렬하려면 (뒤에두려면) 0보다 큰 숫자를 반환
// 2) a를 b 보다 먼저 정렬하려면 (앞에두려면) 0보다 작은 숫자를 반환
// 3) 원래 순서를 그대로 두려면 0을 반환
numbers.sort((a, b) => {
    return a > b ? 1 : -1;
});
console.log(numbers);

numbers.sort((a, b) => a > b ? -1 : 1);
console.log(numbers);

// map()
console.log('--------------');
console.log(iveMembers.map((x) => x)); // ['장원영', '이서', '안유진', '리즈', '레이', '가을']
console.log(iveMembers.map((x) => `아이브: ${x}`)); // ['아이브: 장원영', '아이브: 이서', '아이브: 안유진', '아이브: 리즈', '아이브: 레이', '아이브: 가을']

console.log(iveMembers.map((x) => {
    if (x === '안유진') {
        return `아이브: ${x}`;
    } else {
        return x;
    }
})); // ['장원영', '이서', '아이브: 안유진', '리즈', '레이', '가을']
console.log(iveMembers); // ['장원영', '이서', '안유진', '리즈', '레이', '가을']

// filter()
numbers = [1, 8, 7, 6, 3];

console.log(numbers.filter((x) => x % 2 === 0)); // [8, 6]

// find()
console.log(numbers.find((x) => x % 2 === 0)); // 8

// findIndex()
console.log(numbers.findIndex((x) => x % 2 === 0)); // 1

// reduce()
console.log(numbers.reduce((p, n) => p + n, 0)); // 25
console.log(numbers.reduce((p, n) => p + n, 2)); // 27

// reduce() 퀴즈
// reduce() 함수를 사용해서 iveMembers 변수에 있는 모든 스트링 값들의
// 길이를 더해서 반환하라.
// 참고로 string의 길이는 .length를 이용해서 구할 수 있다.
console.log(iveMembers.reduce((p, n) => p + n.length, 0))