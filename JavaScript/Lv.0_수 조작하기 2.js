// JavaScript

function solution(numLog) {
    var answer = '';
    
    for (let i=0; i<numLog.length-1; i++) {
        if (numLog.at(i+1) === numLog.at(i) + 1) {
            answer += 'w';
        } else if (numLog.at(i+1) === numLog.at(i) - 1) {
            answer += 's';
        } else if (numLog.at(i+1) === numLog.at(i) + 10) {
            answer += 'd';
        } else if (numLog.at(i+1) === numLog.at(i) - 10) {
            answer += 'a';
        }
    }
   console.log(answer);
    return answer;
}