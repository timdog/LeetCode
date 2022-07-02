// Linked List - Two Pointers

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
 var middleNode = function(head) {
    let fast = head;
    let slow = fast;
    // fast moves 2 nodes at a time. if there are an even number of
    // nodes fast will be left with 1 remaining node at the end.
    // the while loop lets fast go past the last node once so that
    // slow will point to the right-most middle node.
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
    }
    return slow;
};