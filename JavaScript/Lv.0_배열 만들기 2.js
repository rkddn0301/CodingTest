// JavaScript

function solution(l, r) {
    var answer = [];
    
    for (let i=l; i<=r; i++) {
        let str = String(i);
        let sw = true;
        for (let j=0; j<str.length; j++)  {
            if (str[j] !== "5" && str[j] !== "0") {
                sw = false;
                break;
            }
        }
                
        if (sw) {
            answer.push(i);
        }

    }
    
    if (answer.length === 0) {
        answer.push(-1);
    }
    
    
    return answer;
}
