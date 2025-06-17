// JavaScript

function solution(my_string, n) {
    var answer = '';
    for (let i=0; i<n; i++) {
        answer += my_string[i];
    }
    console.log(answer);
    return answer;
}

// substring을 이용하여 바로 자를 수도 있다. EX) return my_string.substring(0, n); 
// slice를 이용하여 바로 자를 수도 있다. EX) return my_string.slice(0, n)

/*
substring(start, end)과 slice(start, end) 모두 문자열 일부를 추출하지만,
slice는 음수 인덱스 지원하고, substring은 음수를 0으로 처리함.
또한 substring은 start > end면 자동으로 순서를 바꾸고, slice는 그대로 처리함.
*/