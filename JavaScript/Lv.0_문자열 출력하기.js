// JavaScript
const readline = require('readline'); // Node.js에서 콘솔 입력을 처리하기 위해 readline 모듈을 불러옴.
const rl = readline.createInterface({ // r1이라는 인터페이스를 만들고, stdin(키보드 입력)과 stdout(콘솔 출력)을 연결함.
    input: process.stdin,
    output: process.stdout
});

let input = [];


rl.on('line', function (line) { // 한 줄 입력이 들어오면 line이라는 변수로 받아서 input 배열에 저장함.
    input = [line];
    
}).on('close',function(){ // 입력이 끝났을 때 실행되는 부분.
    str = input[0];
    console.log(str);
});



