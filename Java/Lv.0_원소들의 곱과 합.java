// Java

class Solution {
    public int solution(int[] num_list) {
        int answer = 0;
        int sum = 0;
        int mod = 1;
        
        for (int i : num_list) {
            mod *= i;
            sum += i;
        }
        
        answer = Math.pow(sum, 2) > mod ? 1 : 0;
        
        return answer;
    }
}