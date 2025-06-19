// Java
import java.util.*;

class Solution {
    public ArrayList<Integer> solution(int[] num_list) {
        ArrayList<Integer> answer = new ArrayList<>();
        for (int i=0; i<num_list.length; i++) {
            answer.add(num_list[i]);
        }
        
        if (num_list[num_list.length-1] > num_list[num_list.length-2]) {
            answer.add(num_list[num_list.length-1] - num_list[num_list.length-2]);
        } else {
            answer.add(num_list[num_list.length-1] * 2 );
        }
        return answer;
    }
}

// ArrayList : List 인터페이스를 구현한 가변 길이 배열 구조로 add를 통해 추가 가능


// 아래와 같은 방식도 있다.
class Solution {
    public int[] solution(int[] num_list) {
        int[] answer = new int[num_list.length+1]; // 기존 nul_list 개수보다 +1 하여 int[] 인스턴스 생성

        for(int i = 0; i < num_list.length; i++) {
            answer[i] = num_list[i]; // 원래 있는 값 추가
        }

        int last = num_list[num_list.length-1]; // 마지막 원소 지정 
        int before = num_list[num_list.length-2]; // 이전 원소 지정

        answer[answer.length-1] = last > before ? last - before : last*2; // answer 마지막 비어있는 부분에 값 추가

        return answer;
    }
}
