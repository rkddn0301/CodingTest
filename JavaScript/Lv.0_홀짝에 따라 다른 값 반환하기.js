// JavaScript

function solution(n) {
    var answer = 0;
    if (n % 2 == 1) {
        for (let i=n; i>0; i-=2) {
            console.log(i);
            answer += i;
            console.log(answer);
        }
    } else {
        for (let i=n; i>0; i-=2) {
            console.log(i);
            answer += (i*i);
            console.log(answer);
        }
    }
    return answer;
}

// Math.pow(n,2)를 통해 제곱으로 만들 수 있음.