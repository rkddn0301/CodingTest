// JavaScript

function solution(code) {
    var answer = '';
    let mode = 0; // 스위치
    
    for (let i=0; i<code.length; i++) {
        if (mode === 0) {
            if (code[i] === "1") {
                mode = 1;
            } else if (i % 2 === 0) {
                answer += code[i];
            }
        } else if (mode === 1) {
            if (code[i] === "1") {
                mode = 0;
            } else if (i % 2 === 1) {
                answer += code[i];
            }
        }
        console.log("i : ",i, "code[i] : ",code[i], "mode : ",mode, "answer : ",answer);
    }
    
    console.log(answer);
    return answer === "" ? answer = "EMPTY" : answer;
}


