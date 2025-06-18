// Java

class Solution {
    public String solution(String code) {
        String answer = "";
        int mode = 0; // 스위치
        for (int i=0; i<code.length(); i++) {
           if (mode == 0) {
               if (code.substring(i,i+1).equals("1")) {
                   mode = 1;
               } else if (i % 2 == 0) {
                   answer += code.substring(i,i+1);
               }
           } else if (mode == 1) {
                if (code.substring(i,i+1).equals("1")) {
                    mode = 0;
                } else if (i % 2 == 1) {
                    answer += code.charAt(i);
                }
            }
        }
        
        return answer.length() == 0 ? "EMPTY" : answer;
    }
}

// StringBuilder를 이용한 코드도 존재한다.

class Solution {
    public String solution(String code) {
        StringBuilder answer = new StringBuilder();
        int mode = 0;
        for (int i = 0; i < code.length(); i++) {
            char current = code.charAt(i);
            if (current == '1') {
                mode = mode == 0 ? 1 : 0;
                continue;
            }

            if (i % 2 == mode) {
                answer.append(current);
            }
        }
        return answer.length() == 0 ? "EMPTY" : answer.toString();
    }
}

// append로 추가할 수 있고, delete() 또는 deleteCharAt()로 제거도 가능.