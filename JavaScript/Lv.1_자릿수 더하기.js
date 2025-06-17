// JavaScript

function solution(n)
{
    var answer = 0;

    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    for (let i=0; i<String(n).length; i++) {
        answer += parseInt(String(n).substring(i, i+1));
    console.log(answer);    
    }
    return answer;
}