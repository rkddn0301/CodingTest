// JavaScript

function solution(my_string, overwrite_string, s) {

    console.log(my_string.slice(0, s) + overwrite_string + my_string.slice(s + overwrite_string.length));
    
    return my_string.slice(0, s) + overwrite_string + my_string.slice(s + overwrite_string.length);
}

/*
my_string	overwrite_string	s	result
"He11oWor1d"	"lloWorl"	2	"HelloWorld"
"Program29b8UYP"	"merS123"	7	"ProgrammerS123"

// my_string : 현재 글자, overwrite_string : 변경 할 글자, s : 변경이 시작되는 인덱스 구간, result : 변경 후 글자 
// my_string.slice(0, s)로 변경이 안되는 구간을 먼저 삽입 EX) He
// overwrite_string으로 변경 부분 삽입 EX) lloWorl
// my_string.slice(s + overwrite_string.length) 로 나머지 남는 구간 삽입 EX) d

*/

