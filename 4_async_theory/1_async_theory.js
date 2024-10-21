/**
 * Async theory
 * 동기 : 2초가 걸리는 longWork()가 끝나야 console.log('World')를 실행 가능
 * 비동기 : console.log('Hello'); console.log('World'); 가 출력되고 나서 longWork(); 가 실행
 */
// function longWork() {
//     const now = new Date();

//     /**
//      * milliseconds since epoch
//      * 1970년도 1월 1일부터 지금 코드가 실행되는 순간까지의 시간을
//      * 밀리초로 반환한다.
//      */
//     const milliseconds = now.getTime();
//     const afterTwoSeconds = milliseconds + 2 * 1000;

//     while(new Date().getTime() < afterTwoSeconds){

//     }

//     console.log('완료');
// }

// console.log('Hello');
// longWork();
// console.log('World');

function longWork(){
    // setTimeout은 비동기로 설계된 함수
    setTimeout(()=>{
        console.log('완료');
    }, 2000);
}

console.log('Hello');
longWork();
console.log('World');
/**
 * 비동기 처리
 * JS Engine에는 Stack 영역과 Heap영역이 있고
 * 실행되는 동기 함수는 Stack 영역으로 이동했다가, 실행이 완료되면 Stack 영역에서 지워짐
 * 비동기 함수는 Task Queue / Event Queue로 옮겨짐
 */
/**
 * Event Loop
 * JS Runtime 생성 시에 함께 생성
 * Task Queue / Event Queue를 계속 바라보면서, 실행 종료된 함수가 있는지 확인
 * Call Stack이 비어있는지 확인하고 비어있으면
 * Task Queue / Event Queue 안에 있던 실행 종료된 함수를 Call Stack으로 이동
 * 동기로 실행해야 할 작업이 있다면 실행하고 Call Stack에서 지워짐
 */