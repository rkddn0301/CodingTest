// JavaScript

function solution(ineq, eq, n, m) {
    var answer = 0;
    
    if (ineq === ">") {
        if (eq=== "=") {
            if (n >= m) {
                answer = 1;
            }
        } else {
            if (n > m) {
                answer = 1;
            }
        }
    } else if (ineq==="<") {
        if (eq==="=") {
            if (n <= m) {
                answer = 1;
            }
        } else {
            if (n < m) {
                answer = 1;
            }
        }
    } 
    console.log(answer);
    return answer;
}