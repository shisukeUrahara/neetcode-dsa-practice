/* 
217. Contains Duplicate
Easy
9.2K
1.2K
Companies
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 

Example 1:

Input: nums = [1,2,3,1]
Output: true
Example 2:

Input: nums = [1,2,3,4]
Output: false
Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
 

Constraints:

1 <= nums.length <= 105
-109 <= nums[i] <= 109
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    //  method 1 , time complexity O(n) , space complexity O(n)
    //   let map= new Map();
    //   for(let i=0;i<nums.length;i++){
    //       if(!map.get(nums[i])){
    //           map.set(nums[i],true);
    //       }
    //       else{
    //           return true;
    //       }
    //   }
    //   return false;
    
    //  method 2 , space complexity O(1) , time complexity O(nlogn)
    
    nums.sort();
    for(let i=0;i<nums.length-1;i++){
        if(nums[i]==nums[i+1]){
            return true;
        }
    }
    
    return false;
    
    
    };