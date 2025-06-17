// JavaScript

function solution(num_list) {
    var answer = 0;
    let m = 0, n = 1;
    
    for (let i=0; i<num_list.length; i++) {
      m += num_list[i];
      n = n * num_list[i];
        console.log("n : ", n);
    }
    m = m * m;
    
    console.log(m);
    
    
    answer = n < m ? 1 : 0;
    console.log(answer);
    return answer;
}

/*
 // numList의 모든 요소를 곱한 값과, 합을 제곱한 값을 비교하여
// 곱 < 합의 제곱이면 1, 아니면 0을 반환하는 코드
return numList.reduce((acc, i) => acc * i)                 // 모든 요소 곱함
  < Math.pow(numList.reduce((acc, i) => acc + i), 2)       // 모든 요소 합을 제곱함
  ? 1 : 0;                                                  // 곱 < 합² 이면 1, 아니면 0
*/
