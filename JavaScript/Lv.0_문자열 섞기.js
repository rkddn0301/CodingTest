// JavaScript

function solution(str1, str2) {
    var answer = '';
    for (let i=0; i<str1.length; i++) {
        answer += str1.substring(i, i+1);
        answer += str2.substring(i, i+1);
    
    console.log(answer);
    }
    
    
    return answer;
}