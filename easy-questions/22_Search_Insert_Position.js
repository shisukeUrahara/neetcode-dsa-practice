/* 
35. Search Insert Position
Easy
13.2K
573
Companies
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2
Example 2:

Input: nums = [1,3,5,6], target = 2
Output: 1
Example 3:

Input: nums = [1,3,5,6], target = 7
Output: 4
 

Constraints:

1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums contains distinct values sorted in ascending order.
-104 <= target <= 104

*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

const getInsertPosition = (nums,left,right,target)=>{

    if(left>right){
        return left;
    }
    let mid= Math.floor((left+right)/2);

    if(nums[mid]==target){
        return mid;
    }
    else if(nums[mid]<target){
        return getInsertPosition(nums,mid+1,right,target)
    }
    else{
        return getInsertPosition(nums,left,mid-1,target)
    }


}


var searchInsert = function(nums, target) {

  let left=0;
  let right=nums.length-1;
  let mid=Math.floor((left+right)/2);

  return getInsertPosition(nums,left,right,target);
   
};