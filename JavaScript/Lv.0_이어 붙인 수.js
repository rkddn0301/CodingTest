// JavaScript

function solution(num_list) {
    let oddNum = '', evenNum = '';
    
    num_list.map((value, i) => {
        if (value % 2 === 1) { // 홀수
            oddNum += String(value);
        } else if (value % 2 === 0) { // 짝수
            evenNum += String(value);
        }
    })
    
    console.log("oddNum : ",oddNum, "evenNum : ",evenNum);
    return Number(oddNum) + Number(evenNum);
}

// 아래와 같이 reduce로 누적하는 방안도 있음
function solution(num_list) {
    const { odds, evens } = num_list.reduce(({ odds, evens }, num) => {
        if (num % 2 === 0) {
            evens.push(num)
        } else {
            odds.push(num)
        }
        return { odds, evens }
    }, { odds: [], evens: [] })
    return Number(odds.join('')) + Number(evens.join(''))
}