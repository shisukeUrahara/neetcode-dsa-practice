/* 
70. Climbing Stairs
Easy
17.5K
540
Companies
You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

 

Example 1:

Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
Example 2:

Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
 

Constraints:

1 <= n <= 45
*/

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n<=2){
        return n;

    }
    //  using dynamic programming solution
    let one =2;
    let two=1;
    // let currentSum=0;

    for (let i=n-3;i>=0;i--){
        let currentSum=one +two;
        two=one;
        one=currentSum;
    }

    return one;
    
};