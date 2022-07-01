// Linked List - Math - Recursion

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
    let result = {}
    let arr = [];
    let rem = 0;
    while (l1 || l2) {
        let l1Val = l1 && l1.val ? l1.val : 0;
        let l2Val = l2 && l2.val ? l2.val : 0;
        let val = l1Val + l2Val + rem;
        rem = 0;
        if (val < 10) arr.push(val)
        if (val >= 10) {
            arr.push(val - 10);
            rem = 1;
        }
        l1 = l1 && l1.next ? l1.next : null;
        l2 = l2 && l2.next ? l2.next : null;
        if (!l1 && !l2 && rem > 0) arr.push(1);
    }
    
    const L = function (val){
        this.val = val;
        this.next = null;
    }
    
    let node = null;
    let temp = null;
    for (let i = arr.length - 1; i >= 0; i--) {
        if (!node) {
            node = new L(arr[i]);
        } else {
            temp = new L(arr[i]);
            temp.next = node;
            node = temp;
        }
        
    }
    return node;
};