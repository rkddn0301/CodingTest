// JavaScript

function solution(num_list) {
    
    
    if (num_list.at(-1) > num_list.at(-2)) {
        num_list[num_list.length] = num_list.at(-1) - num_list.at(-2);  
    } else {
        num_list[num_list.length] = num_list.at(-1) * 2;
    }
    
    return num_list;
    
}
