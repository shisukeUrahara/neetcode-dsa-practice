/* 
7. Reverse Integer
Medium
10.2K
11.9K
Companies
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

 

Example 1:

Input: x = 123
Output: 321
Example 2:

Input: x = -123
Output: -321
Example 3:

Input: x = 120
Output: 21
 

Constraints:

-231 <= x <= 231 - 1
*/

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {

    if(x==0){
        return x;
    }

    let minValue=-Math.pow(2,31);
    let maxValue=Math.pow(2,31);

    let result=0;

    while(x){
        let lastDigit=x%10;
        result=result*10+lastDigit;
        x=parseInt(x/10);
    }

    if(result>maxValue || result<minValue){
        return 0;
    }

    return result;
    
};