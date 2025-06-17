// Java

import java.util.Scanner;

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String a = sc.next();
        String str = "";
        for (int i=0; i<a.length(); i++) {
            if (a.substring(i, i+1).equals(a.substring(i, i+1).toLowerCase())) {
                str += a.substring(i, i+1).toUpperCase();             
            } else if (a.substring(i, i+1).equals(a.substring(i, i+1).toUpperCase())) {
                str += a.substring(i, i+1).toLowerCase();
            }  
        }
        System.out.println(str);    
    }
}

// 소문자 확인 : 'Character.isLowerCase(a.charAt(i))' / 대문자 확인 : 'Character.isUpperCase(a.charAt(i))' 방법도 있음