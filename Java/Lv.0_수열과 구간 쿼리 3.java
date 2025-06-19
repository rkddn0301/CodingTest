// Java

class Solution {
    public int[] solution(int[] arr, int[][] queries) {
        int[] answer = arr;
        for (int[] i : queries) {
          int temp = arr[i[0]];
            answer[i[0]] = arr[i[1]];
            answer[i[1]] = temp;

        }
        return answer;
    }
}
