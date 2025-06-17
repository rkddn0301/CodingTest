// JavaScript

function solution(a, b) {
    var answer = 0;
    if (`${a}`+`${b}` >= `${b}`+`${a}`) {
    answer = `${a}`+`${b}`;
    console.log(answer);    
    } else {
        answer = `${b}`+`${a}`;
        console.log(answer);
    }
    
    
    return parseInt(answer);
}


// Math.max 함수를 써도 무방함 EX) return Math.max(`${a}${b}`, `${b}${a}`);