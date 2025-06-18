// Java

class Solution {
    public int solution(int[] num_list) {
        int answer = 0;
        String oddNum = "";
        String evenNum = "";
        
        for (int i : num_list) {
            oddNum += i % 2 == 1 ? i+"" : "";
            evenNum += i % 2 == 0 ? i+"" : "";
        }
        
        return Integer.parseInt(oddNum) + Integer.parseInt(evenNum);
    }
}

// Int => String 변환 방식은 String.valueOf(i)와 Integer.toString(i)가 있다.