// JavaScript

function solution(arr, queries) {
    var answer = [];
    let smaller = []; // 가장 작은 수가 삽입되는 변수
    
    queries.map((query, index) => {
        smaller[index] = 1000001; 
        for (let i=query.at(0); i<=query.at(1); i++) {
            if (arr[i] > query.at(-1) ) { // k보다 큰 수 비교
                if (smaller[index] > arr[i]) { // 가장 작은 수 구하기
                    smaller[index] = arr[i];
                }
            }
        }
         if (smaller[index] === 1000001) { // 가장 작은 수를 찾지 못했는지 확인
                [...answer, answer[index] = -1]     
            } else {
                [...answer, answer[index] = smaller[index]]     
            }
        
    })
    return answer;
}

// 아래와 같은 방안도 있음

function solution(arr, queries) {
    return queries.map(([s, e, k]) =>
        arr
            .slice(s, e + 1)             // s~e 구간 추출
            .filter((n) => n > k)        // k보다 큰 값만 남김
            .sort((a, b) => a - b)[0]    // 오름차순 정렬('a-b'이며 내림차순은 'b-a') 후 첫 번째 값('[0]') 선택
        || -1                            // 없으면 -1 반환
    );
}
