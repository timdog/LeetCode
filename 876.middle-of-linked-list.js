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
    let node = head;
    let length = 0;
    while (node) {
        length++;
        node = node.next;
    }
    
    let move = Math.floor(length / 2);
    while (move) {
        move--;
        head = head.next;
    }
    
    return head;
};