// JavaScript

function solution(a, d, included) {
    let answer = 0;
    for (let i=0; i<included.length; i++) {
            console.log(a);
        if (included[i]) {
            answer += a;
        }
            a += d;
    }
    return answer;
}