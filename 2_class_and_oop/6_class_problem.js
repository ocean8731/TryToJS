const iveMembers = [
    {
        name: '안유진',
        year: 2003,
    },
    {
        name: '가을',
        year: 2002,
    },
    {
        name: '레이',
        year: 2004,
    },
    {
        name: '장원영',
        year: 2004,
    },
    {
        name: '리즈',
        year: 2004,
    },
    {
        name: '이서',
        year: 2007,
    },
]

// BTS는 한국 아이돌이고
// 방탄소년단이라는 이름의 보이그룹이다.
// BTS는 남자 아이돌이다.
const btsMembers = [
    {
        name: '진',
        year: 1992,
    },
    {
        name: '슈가',
        year: 1993,
    },
    {
        name: '제이홉',
        year: 1994,
    },
    {
        name: 'RM',
        year: 1994,
    },
    {
        name: '지민',
        year: 1995,
    },
    {
        name: '뷔',
        year: 1995,
    },
    {
        name: '정국',
        year: 1997,
    },
]

class Country {
    name;
    idolGroup;

    constructor(name, idolGroup) {
        this.name = name;
        this.idolGroup = idolGroup;
    }
}

class IdolGroup {
    name;
    member;

    constructor(name, member) {
        this.name = name;
        this.member = member;
    }
}

class Idol {
    name;
    year;

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
}

class MaleIdol extends Idol {
    sing() {
        return `'${name}이 노래를 부릅니다.`;
    }
}

class FemaleIdol extends Idol {
    dance() {
        return `${name}이 춤을 춥니다.`;
    }
}

const cIveMembers = iveMembers
    .map((member) => new FemaleIdol(member.name, member.year));

const cBtsMembers = btsMembers
    .map((member) => new MaleIdol(member.name, member.year));
const ive = new IdolGroup('아이브', cIveMembers);
const bts = new IdolGroup('방탄소년단', cBtsMembers);
const korean = new Country('대한민국', [ive, bts]);
console.log(korean);

const allTogether = new Country(
    '대한민국', [
        new IdolGroup(
            '아이브',
            iveMembers
                .map((member) => new FemaleIdol(member.name, member.year))
        )
        ,
        new IdolGroup(
            '방탄소년단',
            btsMembers
                .map((member) => new MaleIdol(member.name, member.year))
        )
    ]);
console.log(allTogether);