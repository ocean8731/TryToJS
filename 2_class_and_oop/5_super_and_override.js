/**
 * Super and Override
 */
class IdolModel{
    name;
    year;

    constructor(name, year){
        this.name = name;
        this.year = year;
    }

    sayHello(){
        return `안녕하세요 ${this.name}입니다.`;
    }
}

class FemaleIdolModel extends IdolModel{
    // 노래 / 춤
    part;

    constructor(name, year, part){
        // super : 부모 클래스의 생성자를 호출하는 방법
        super(name, year);
        this.part = part;
    }
    // 왜 super를 사용하는가?
    // 자식 클래스만의 property를 추가할 때, 부모 클래스의 생성자를 호출해야 부모 클래스의 property를 사용할 수 있다.

    // js는 함수 내부에서 property를 불러올 때 super를 사용하지 못한다. 다른 객체지향 언어와의 차이
    // 그런데 함수에는 super 키워드를 사용할 수 있다.
    sayHello(){
        // return `안녕하세요 ${this.name}입니다. ${this.part}를 맡고있습니다.`;
        return `${super.sayHello()} ${this.part}를 맡고있습니다.`;
    }
}

const yuJin = new FemaleIdolModel('안유진', 2003, '보컬');
console.log(yuJin); // FemaleIdolModel { name: '안유진', year: 2003, part: '보컬' }

const wonYoung = new IdolModel('장원영', 2002);
console.log(wonYoung); // IdolModel { name: '장원영', year: 2002 }
console.log(wonYoung.sayHello()); // 안녕하세요 장원영입니다.
console.log(yuJin.sayHello()); // 안녕하세요 안유진입니다. 보컬를 맡고있습니다.