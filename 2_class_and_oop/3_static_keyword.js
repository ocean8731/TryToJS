/**
 * Static Keyword
 */
// class IdolModel {
//     name;
//     year;
//     static groupName = '아이브'; static keyword를 사용하면 클래스 자체에 귀속된다.

//     constructor(name, year) {
//         this.name = name;
//         this.year = year;
//     }

//     static returnGroupName(){
//         return '아이브';
//     }
// }

// const yuJin = new IdolModel('안유진', 2003);
// console.log(yuJin);

// console.log(IdolModel.groupName);
// console.log(IdolModel.returnGroupName());

/**
 * factory constructor
 */
class IdolModel{
    name;
    year;
    // static 키워드를 통해 어떤 데이터를 입력받아서 이 인스턴스를 생성할지 미리 정의해둘 수 있다.
    // kotlin에서의 companion object와 비슷하다.
    constructor(name, year){
        this.name = name;
        this.year = year;
    }

    static fromObject(object){
        return new IdolModel(
            object.name,
            object.year,
        );
    }

    static fromList(list){
        return new IdolModel(
            list[0],
            list[1],
        );
    }
}

const yuJin2 = IdolModel.fromObject({
    name: '안유진',
    year: 2003,
});
console.log(yuJin2); // IdolModel { name: '안유진', year: 2003 }

const wonYoung = IdolModel.fromList(
    [
        '장원영',
        2003,
    ]
);
console.log(wonYoung); // IdolModel { name: '장원영', year: 2003 }