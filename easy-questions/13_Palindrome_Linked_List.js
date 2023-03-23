/*
234. Palindrome Linked List
Easy
13.5K
743
Companies
Given the head of a singly linked list, return true if it is a 
palindrome
 or false otherwise.

 

Example 1:


Input: head = [1,2,2,1]
Output: true
Example 2:


Input: head = [1,2]
Output: false
 

Constraints:

The number of nodes in the list is in the range [1, 105].
0 <= Node.val <= 9
 

Follow up: Could you do it in O(n) time and O(1) space?
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if(!head){
        return true;
    }

    let slow=head;
    let fast=head;

    //  find center of linked list
    while(fast && fast.next){
        slow=slow.next;
        fast=fast.next.next;
    }

    //  reverse the second half of linked list
    let prev=null;
    let current=slow;

    while(current){
        let next=current.next;
        current.next=prev;
        prev=current;
        current=next;
    }

    // traverse both the pointers and check if linked list is a palindrome
    let p1=head;
    let p2=prev;

    while(p2){
        if(p1.val!==p2.val){
            return false;
        }
        p1=p1.next;
        p2=p2.next;
    }

    return true;

};