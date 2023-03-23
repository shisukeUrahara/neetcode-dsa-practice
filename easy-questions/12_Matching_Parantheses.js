/* 
20. Valid Parentheses
Easy
18.6K
1.1K
Companies
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
 

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.
*/

/**
 * @param {string} s
 * @return {boolean}
 */

function _getMatchingElement(element){

    if(element==')'){
        return '(';
    }

    if(element=='}'){
        return '{';
    }

    if(element==']'){
        return '[';
    }

    return undefined;

}

var isValid = function(s) {
   let result=[];
   result.push(s.charAt(0));

   for(let i=1;i<s.length;i++){
       let currentElement=s.charAt(i);
       let matchingElement=_getMatchingElement(currentElement);
       let previousElement=result[result.length-1];
       
      if(!result.length || previousElement!==matchingElement){
          result.push(currentElement);

          }
       else if(previousElement==matchingElement){
           result.pop();
       }
      


   }

   return result.length==0;

};