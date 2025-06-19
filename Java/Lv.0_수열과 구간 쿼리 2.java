// Java
import java.util.*;

class Solution {
    public ArrayList<Integer> solution(int[] arr, int[][] queries) {
        ArrayList<Integer> answer = new ArrayList<>();
        
        for (int[] j : queries) {
            int smaller = 1000001;
            for (int i=j[0]; i<=j[1]; i++) {
                if (arr[i] > j[2]) {
                    if (smaller > arr[i]) {
                        smaller = arr[i];
                    }
                }
            }
            if (smaller != 1000001) {
            answer.add(smaller);    
            } else {
                answer.add(-1);
            }
            
            
        }
        
        return answer;
    }
}
