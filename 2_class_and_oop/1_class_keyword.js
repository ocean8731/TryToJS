/**
 * Class Keyword
 */
class IdolModel {
    // js에서는 property를 따로 선언하지 않아도 된다.
    // 왠만하면 정의하는 것이 나은 것 같다.
    name;
    year;

    // constructor : 파라미터를 넣어서 객체를 생성해주는 방법
    constructor(name, year) {
        // 여기서의 this는 생성자로 생성된 객체를 가리킨다.
        this.name = name; // name은 생성자로 생성된 객체의 프로퍼티
        this.year = year; // year는 생성자로 생성된 객체의 프로퍼티
    }
    // 클래스 내에서는 function 키워드를 사용하지 않는다.
    // function의 signature를 js가 인지하므로
    sayName(){
        return `안녕하세요 저는 ${this.name}입니다.`;
    } // 해당 함수를 실행한 객체의 name을 반환한다.
}

// constructor를 통해 인스턴스 생성하기
const yuJin = new IdolModel('안유진', 2003);
console.log(yuJin); // IdolModel { name: '안유진', year: 2003 }
const gaeul = new IdolModel('가을', 2002);
console.log(gaeul); // IdolModel { name: '가을', year: 2002 }
const ray = new IdolModel('레이', 2004);
console.log(ray); // IdolModel { name: '레이', year: 2004 }
const wonYoung = new IdolModel('장원영', 2004);
console.log(wonYoung); // IdolModel { name: '장원영', year: 2004 }
const liz = new IdolModel('리즈', 2004);
console.log(liz); // IdolModel { name: '리즈', year: 2004 }
const eseo = new IdolModel('이서', 2007);
console.log(eseo); // IdolModel { name: '이서', year: 2007 }

console.log(yuJin.name); // 안유진
console.log(yuJin.year); // 2003

console.log(yuJin.sayName()); // 안녕하세요 저는 안유진입니다.
console.log(wonYoung.sayName()); // 안녕하세요 저는 장원영입니다.

console.log(typeof IdolModel); // function?!
console.log(typeof yuJin); // object