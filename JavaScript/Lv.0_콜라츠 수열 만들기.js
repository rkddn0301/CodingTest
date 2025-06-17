// JavaScript

function solution(n) {
    var answer = [];
    
    answer.push(n); // 초기값 삽입
    while (n > 1) {
        
        if (n % 2 == 0) { // 짝수
            n = n / 2;
            
        } else if (n % 2 == 1) { // 홀수
            n = 3 * n + 1;
        }
        
        answer.push(n);
        console.log(answer);
        
    }
    
    return answer;
}