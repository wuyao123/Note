/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let prev = null;
    let cur = head;
    while (!cur.next) {
        let next = cur.next;
        cur.next = prev;
        pre = cur;
        cur = next;
    }
    return cur
};


var reverseList = function(head) {
    if (!head || !head.next) return head
    let next = head.next
    
    let newHead = reverseList(next)

    next.next = head;
    head.next = null;

    return newHead;
}


// @lc code=end

