// Linked List - Recursion

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
    if (!head) return null;
    let arr = [];
    while (head) {
        arr.push(head.val);
        head = head.next;
    }
    const L = function (val){
        this.val = val;
        this.next = null;
    }
    
    const dummy = new ListNode(arr[arr.length - 1]);
    let prev = dummy;
    for (let i = arr.length - 2; i >= 0; i--) {
        let temp = new ListNode(arr[i]);
        prev.next = temp;
        prev = temp;
        temp = temp.next;
    }
    return dummy;
};