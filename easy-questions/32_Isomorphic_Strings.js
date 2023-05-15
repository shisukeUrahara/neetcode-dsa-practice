/* 
205. Isomorphic Strings
Easy
6.7K
1.5K
Companies
Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

 

Example 1:

Input: s = "egg", t = "add"
Output: true
Example 2:

Input: s = "foo", t = "bar"
Output: false
Example 3:

Input: s = "paper", t = "title"
Output: true
 

Constraints:

1 <= s.length <= 5 * 104
t.length == s.length
s and t consist of any valid ascii character.
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let mapS=new Map();
    let mapT= new Map();

    for(let i=0;i<s.length;i++){
        if(!mapS.has(s.charAt(i))){
            mapS.set(s.charAt(i),t.charAt(i));
        }
        else if(mapS.get(s.charAt(i)) && mapS.get(s.charAt(i))!==t.charAt(i)){
            return false;
        }

         if(!mapT.has(t.charAt(i))){
            mapT.set(t.charAt(i),s.charAt(i));
        }
        else if(mapT.get(t.charAt(i)) && mapT.get(t.charAt(i))!==s.charAt(i)){
            return false;
        }
    }

    return true;
    
};