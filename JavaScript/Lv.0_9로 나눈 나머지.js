// JavaScript

function solution(number) {
    var answer = 0;
    
    for (let i=0; i<number.length; i++) {
        answer += Number(number.charAt(i));
    }
    return answer%9;
}

// charAt()은 문자열에서 지정한 인덱스의 문자 하나를 반환하는 메서드이다.
// parseInt()로 변환하기 힘들 정도의 숫자가 있을 경우 BigInt()로 변환하면 된다.