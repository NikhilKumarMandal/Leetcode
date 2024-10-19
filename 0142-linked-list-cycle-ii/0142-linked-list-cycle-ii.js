/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    // let mySet = new Set()
    // let curr = head;

    // while (curr !== null) {
    //     if (mySet.has(curr)) {
    //         return curr
    //     }
    //     mySet.add(curr)
    //     curr = curr.next;
    // }
    // return null

    let slow = head;
    let fast = head;

    while(fast !== null && fast.next !== null){
        slow = slow.next;
        fast = fast.next.next;

        if(slow === fast){
           let start = head;
            while (start !== slow) {
                start = start.next;
                slow = slow.next;
            }
            return start;
        }
    }
    return null;
};