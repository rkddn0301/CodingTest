// JavaScript

function solution(arr) {
    let stk = [];
    let i = 0;
    
    while (i < arr.length) {
          if (stk.length === 0 || stk.at(-1) < arr[i]) { // stk가 비었거나 마지막 원소값이 arr[i]보다 작을 경우
            stk.push(arr[i]);
            i++;
        }
        
        if (stk.at(-1) >= arr[i]) { // stk 마지막 원소값이 arr[i]보다 크거나 같을 경우
            stk.pop();
        } 
        
    }
    console.log(stk);
    
    return stk;
}

// .pop()은 가장 마지막 배열을 삭제하는 메서드