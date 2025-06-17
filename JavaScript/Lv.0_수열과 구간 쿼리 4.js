// JavaScript

function solution(arr, queries) {
    
    queries.map(([s,e,k]) => {
        for (let i=s; i<=e; i++) {
            arr[i] = i % k === 0 ? arr[i] + 1 : arr[i];
        }
        
    })
    
    return arr;
}

// 아래와 같이 forEach문 사용 가능
function solution(arr, queries) {
    for(let [s, e, k] of queries) {
        for(let i = s; i <= e; i++) {
            if(i % k === 0) arr[i]++;
        }
    }
    return arr;
}