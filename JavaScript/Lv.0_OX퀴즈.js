// JavaScript

function solution(quiz) {
    var answer = [];
    let value = [];
    let result = 0;
    for (let i=0; i<quiz.length; i++) {
        value[i] = quiz[i].split(" ");
        if (value[i][1] === "+") {
            result = parseInt(value[i][0])+parseInt(value[i][2]);
        } else if (value[i][1] === "-") {
            result = parseInt(value[i][0])-parseInt(value[i][2]);
        }
        if (result === parseInt(value[i][4])) {
                answer[i]="O";
            
            } else {
                answer[i]="X";
            }
        console.log(answer);
    }
    return answer;
}

