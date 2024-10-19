/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {



// ------------- Method 1 -----------------

let slow = head;
let fast = head;

while(fast !== null && fast.next !== null){
    slow = slow.next;
    fast = fast.next.next;

    if(slow === fast){
        return true
    }
}
return false

// ------------- Method 2 ---------------

//    let mySet = new Set()
//     let curr = head;

//     while (curr !== null) {
        
//         if (mySet.has(curr)) {
//             return true
//         }

//         mySet.add(curr)
//         curr = curr.next;
//     }

//     return false;
};