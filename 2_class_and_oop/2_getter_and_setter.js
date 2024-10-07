/**
 * Getter and Setter
 */
class IdolModel{
    name;
    year;

    constructor(name, year){
        this.name = name;
        this.year = year;
    }

    /**
     * 1) 데이터를 가공해서 새로운 데이터를 반환할때
     * 2) private한 값을 반환할때
     */
    get nameAndYear(){
        return `${this.name}-${this.year}`;
    } // 함수를 변수처럼 사용할 수 있는 keyword. Java의 getter와는 좀 다른 느낌이다.

    set setName(name){
        this.name = name;
    } // 값을 저장할 때 사용하는 keyword. 하나의 parameter를 받아야 한다.
    // 다만 요즘은 잘 사용하지 않는다. Immutable Programming을 지향하기 때문이다.
}

const yuJin = new IdolModel('안유진', 2003);
console.log(yuJin); // IdolModel { name: '안유진', year: 2003 }
console.log(yuJin.nameAndYear); // 안유진-2003

yuJin.setName = '장원영';
console.log(yuJin); // IdolModel { name: '장원영', year: 2003 }

class IdolModel2{
    #name; // # : private한 변수를 선언할 때 사용하는 keyword
    year;

    constructor(name, year){
        this.#name = name;
        this.year = year;
    }

    get name(){
        return this.#name;
    } // private한 변수를 반환할 때 사용하는 keyword

    set name(name){
        this.#name = name;
    } // private한 변수를 수정할 때 사용하는 keyword이나,권장되지 않는다. Immutable Programming을 지향하기 때문이다.
}

const yuJin2 = new IdolModel2('안유진', 2003);
console.log(yuJin2); // IdolModel2 { year: 2003 }
console.log(yuJin2.name); // 안유진

yuJin2.name = '코드팩토리';
console.log(yuJin2.name);