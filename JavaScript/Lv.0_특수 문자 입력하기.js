// JavaScript

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('close', function () {
    console.log(`!@#$%^&*(\\'"<>?:;`);
    
});

// "\"같은 경우는 "\\"라고 표시해줘야 직접 입력하는 값이구나를 인지한다.
// "", '' 로 문자열 입력할 때 안에 동일한 따옴표(" = ", ' = ')를 작성하기 위해선 "\"로 백틱을 사용하여 입력하는걸 이스케이프라 한다.