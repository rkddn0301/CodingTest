// JavaScript

function solution(arr, queries) {
    queries.map(([i,j]) => {
        let temp = arr[i];
        [...arr, arr[i] = arr[j]];
        [...arr, arr[j] = temp];
    
    })
    console.log(arr);
    return arr;
}