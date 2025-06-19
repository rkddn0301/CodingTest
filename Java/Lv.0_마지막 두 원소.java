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

// ArrayList : List �������̽��� ������ ���� ���� �迭 ������ add�� ���� �߰� ����


// �Ʒ��� ���� ��ĵ� �ִ�.
class Solution {
    public int[] solution(int[] num_list) {
        int[] answer = new int[num_list.length+1]; // ���� nul_list �������� +1 �Ͽ� int[] �ν��Ͻ� ����

        for(int i = 0; i < num_list.length; i++) {
            answer[i] = num_list[i]; // ���� �ִ� �� �߰�
        }

        int last = num_list[num_list.length-1]; // ������ ���� ���� 
        int before = num_list[num_list.length-2]; // ���� ���� ����

        answer[answer.length-1] = last > before ? last - before : last*2; // answer ������ ����ִ� �κп� �� �߰�

        return answer;
    }
}
