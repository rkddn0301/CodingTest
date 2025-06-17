// JavaScript

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    let str = '';
 for (let i=0; i<input[0].length; i++) {
     if (input[0].slice(i,i+1) === input[0].slice(i,i+1).toUpperCase()) {
     str += input[0].slice(i,i+1).toLowerCase();    
     } else {
         str += input[0].slice(i,i+1).toUpperCase();
     }
      
 }

    console.log(str);
});


/*

// for문을 아래와 같은 식으로 사용해서 str의 각 문자값을 따올 수도 있다.
 
 str = input[0];
    ss = "";
    for(let i of str){
        if(i ==  i.toUpperCase()){
            ss += i.toLowerCase();
        }
        else{
            ss += i.toUpperCase();
        }
    }
    console.log(ss)

*/