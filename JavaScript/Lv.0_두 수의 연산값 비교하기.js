// JavaScript

function solution(a, b) {
    return Math.max(Number(`${a}`+`${b}`), 2 * a * b);
}

// parseInt(a+""+b+""); 식으로 변환도 가능하다.