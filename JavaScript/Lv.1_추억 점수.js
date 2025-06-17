// JavaScript

function solution(name, yearning, photo) {
    let answer = [];
    let score = 0;

    photo.map((array) => {
        name.map((e, i) => { // e : name배열에서 현재 순회 중인 이름, i : 인덱스
            if (array.includes(e) == true) {
                score += yearning[i];
            } else {
                score += 0;
            }
        })
        answer.push(score);
        score = 0;
    })
    return answer;
}