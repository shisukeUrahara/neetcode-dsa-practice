/* 
125. Valid Palindrome
Easy
6.7K
7K
Companies
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

 

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
 

Constraints:

1 <= s.length <= 2 * 105
s consists only of printable ASCII characters.
*/

/**
 * @param {string} s
 * @return {boolean}
 */

function isAlphanumeric(char) {
    return /^[a-z0-9]+$/i.test(char);
  }
  
  var isPalindrome = function(s) {
  
      if(!s.length){
          return true;
      }
      
       s=s.trim().toLowerCase();
  //   method 1 , space complexity O(n) , time complexity O(n)
  // //   iterate the string and remove alphanumeric character
  // let finalString='';
  //     for(let i=0;i<s.length;i++){
  //         if(isAlphanumeric(s.charAt(i))){
  //             finalString+=s.charAt(i);
  //         }
  //     }
  
  //     let left=0;
  //     let right=finalString.length-1;
  
  //     while(left<right){
  //         if(finalString.charAt(left)!==finalString.charAt(right)){
  //             return false;
  //         }
  //         else{
  //             left++;
  //             right--;
  //         }
  
  //     }
  
  //     return true;
  
  //   method 2 , space complexity O(1) , time complexity O(n)
  
  let left=0;
  let right=s.length-1;
  
  while(left<right){
      if(!isAlphanumeric(s.charAt(left))){
          left++;
      }
      else if(!isAlphanumeric(s.charAt(right))){
          right--;
      }
      else if(s.charAt(left)!==s.charAt(right)){
          return false;
      }
      else{
          left++;
          right--;
      }
  }
  
  return true;
  };