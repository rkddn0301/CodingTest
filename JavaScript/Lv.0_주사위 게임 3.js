// JavaScript

function solution(a, b, c, d) {
    const dices = [a, b, c, d];
    const counts = {};

    // 각 숫자의 빈도 세기
    dices.forEach(x => counts[x] = (counts[x] || 0) + 1);
    

    const keys = Object.keys(counts).map(Number); // 나온 주사위 숫자 키
    const values = Object.values(counts); // 나온 주사위 숫자가 겹쳐진 횟수 값

    if (values.length === 1) {
        // 4개 같은 숫자
        return 1111 * keys[0];
    } else if (values.length === 2) {
        if (values.includes(3)) {
            // 3개 + 1개
            const p = keys.find(k => counts[k] === 3);
            const q = keys.find(k => counts[k] === 1);
            return (10 * p + q) ** 2;
        } else {
            // 2개 + 2개
            return (keys[0] + keys[1]) * Math.abs(keys[0] - keys[1]);
        }
    } else if (values.length === 3) {
        // 2개 + 1개 + 1개
        const p = keys.find(k => counts[k] === 2);
        const others = keys.filter(k => counts[k] === 1);
        return others[0] * others[1];
    } else {
        // 전부 다름
        return Math.min(...dices);
    }
}


// Math.abs()는 절대값을 의미

// 아래와 같이 단순 반복을 할 수도 있다.
function solution(a, b, c, d) {
    if (a === b && a === c && a === d) return 1111 * a

    if (a === b && a === c) return (10 * a + d) ** 2
    if (a === b && a === d) return (10 * a + c) ** 2
    if (a === c && a === d) return (10 * a + b) ** 2
    if (b === c && b === d) return (10 * b + a) ** 2

    if (a === b && c === d) return (a + c) * Math.abs(a - c)
    if (a === c && b === d) return (a + b) * Math.abs(a - b)
    if (a === d && b === c) return (a + b) * Math.abs(a - b)

    if (a === b) return c * d
    if (a === c) return b * d
    if (a === d) return b * c
    if (b === c) return a * d
    if (b === d) return a * c
    if (c === d) return a * b

    return Math.min(a, b, c, d)
}