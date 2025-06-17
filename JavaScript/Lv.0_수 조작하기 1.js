// JavaScript

function solution(n, control) {
    let pk = ''; // 누른 키
    for (let i=0; i<control.length; i++) {
        pk = control.substring(i, i+1);
        if (pk === "w") {
            n += 1;
        } else if (pk === "s") {
            n -= 1;
        } else if (pk === "d") {
            n += 10;
        } else if (pk === "a") {
            n -= 10;
        }
    }
    return n;
}

// [...control]를 return하거나 다른 변수에 넣으면 배열 형식으로 변환되어 reduce나 map과 같은 메서드 사용이 가능하다.