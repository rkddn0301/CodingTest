// Java

class Solution {
    public String solution(String[] arr) {
        String answer = "";
         for (int i=0; i<arr.length; i++) {
            answer += arr[i];
         }
        return answer;
    }
}


// 아래와 같이 forEach문 사용 가능
 for(String a : arr) {
            answer += a;
        }