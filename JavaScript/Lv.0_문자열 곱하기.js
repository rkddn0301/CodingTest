// JavaScript

function solution(my_string, k) {
    var answer = '';
    for (i=0; i<k; i++) {
    answer+=my_string;
    }
    console.log(answer);
    
    return answer;
}

// repeat() 메서드로 반복함수를 간단히 만들 수 있다. EX) return answer.repeat(k);