// JavaScript

function solution(my_string, queries) {
    queries.map(([s, e]) => {
        let changeText = ''; // 바뀌는 문자열
        for (let i=e; i>s-1; i--) {
            changeText += my_string.charAt(i);
        }
        
        let firstText = my_string.substring(0,s); // 바뀌는 구간 앞 문자열
        let endText = my_string.substring(e+1); // 바뀌는 구간 뒤 문자열
        
        my_string = firstText + changeText + endText; // 바뀐 후 반영    
    })
    return my_string;
}