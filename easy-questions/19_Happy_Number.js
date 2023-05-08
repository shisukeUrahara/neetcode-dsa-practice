/* 
202. Happy Number
Easy
8.6K
1.1K
Companies
Write an algorithm to determine if a number n is happy.

A happy number is a number defined by the following process:

Starting with any positive integer, replace the number by the sum of the squares of its digits.
Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
Those numbers for which this process ends in 1 are happy.
Return true if n is a happy number, and false if not.

 

Example 1:

Input: n = 19
Output: true
Explanation:
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1
Example 2:

Input: n = 2
Output: false
 

Constraints:

1 <= n <= 231 - 1
*/

/**
 * @param {number} n
 * @return {boolean}
 */
const getSquareSum = (n)=>{
    let sum=0;
    while(n){
        let remainder=n%10;
        sum+=Math.pow(remainder,2);
        n=parseInt(n/10);
    }

    return sum;

}
var isHappy = function(n) {
   const map = new Map();
   let squareSum= getSquareSum(n);
   // console.log("**@ n is , ",n);
   // console.log("**@ squareSum is , ",squareSum);


   while(true){
       if(squareSum===1){
           return true;
       }
       else if(!map.has(squareSum)){
           map.set(squareSum,true);
           squareSum= getSquareSum(squareSum);
       }
       else{
           return false;
       }
   }
   
};