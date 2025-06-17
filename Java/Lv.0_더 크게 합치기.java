// Java

class Solution {
    public int solution(int a, int b) {
        int value1 = Integer.parseInt(a+"" + b+"");
        int value2 = Integer.parseInt(b+"" + a+"");
        
        if (value1 >= value2) {
            return value1;
        } else {
            return value2;
        }
    }
}
