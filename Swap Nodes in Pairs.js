/**
 * Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)
 * 
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
var swapPairs = function(head) {
    let pointer = null;
    let auxNode = null;
    
    function dfs (node){
        if(!node) return null;
        if(!node.next) return node;
        if(node.val !==node.next.val){
            pointer = node.next.next;
            auxNode = node;
            node = node.next;
            node.next = auxNode;
            node.next.next = pointer
        }
        node.next.next = dfs(node.next.next);
        return node;
    }

    return dfs(head,0);
};