// Java

class Solution {
    public int solution(int n, String control) {
        String pk = "";
        
         for (int i=0; i<control.length(); i++)  {
             pk = control.substring(i, i+1);
            
             if (pk.equals("w")) {
                 n += 1;
             } else if (pk.equals("s")) {
                 n -= 1;
             } else if (pk.equals("d")) {
                 n += 10;
             } else if (pk.equals("a")) {
                 n -= 10;
             }
         }
        System.out.println(n);
        return n;
    }
}
