/**
 * Callback Function : 특정 작업이 끝나고 다시 호출되는 함수
 */
function waitAndRun() {
    setTimeout(() => {
        console.log('끝');
    }, 2000);
}

// waitAndRun();

// callback hell
function waitAndRun2() {
    setTimeout(
        () => {
            console.log('1번 콜백 끝');
            setTimeout(() => {
                console.log('2번 콜백 끝');
                setTimeout(() => {
                    console.log('3번 콜백 끝');
                }, 2000);
            }, 2000);
        }, 2000);
}

// waitAndRun2();

/**
 * Promise
 * resolve : 반환하고 싶은 값
 * reject : 에러를 던지고 싶을 때
 */
const timeoutPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('완료');
    }, 2000);
});

// 반환받은 promise 객체 뒤에 then을 붙여주면, resolve에서 넣어준 값이 들어오게 됨
// timeoutPromise.then((res) => {
//     console.log('---then---');
//     console.log(res);
// });

const getPromise = (seconds) => new Promise((resolve, reject) => {
    setTimeout(() => {
        // if(xxx){
        //     resolve('성공')
        // }else{
        //     reject('에러');
        // }
        resolve('에러');
    }, seconds * 1000);
});

// getPromise(3)
//     .then((res) => {
//         console.log('--- first then ---');
//         console.log(res);
//     })
//     .catch((res)=>{
//         console.log('--- first catch ---');
//         console.log(res);
//     })
//     .finally(()=>{
//         console.log('--- finally ---');
//     });

// 여러 promise를 동시에 실행
Promise.all([
    getPromise(1),
    getPromise(4),
    getPromise(1),
]).then((res)=>{
    console.log(res);
});