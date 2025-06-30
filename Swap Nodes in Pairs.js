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
        if(!node || !node.next)return;
        if(node.val !==node.next.val){
            pointer = node.next.next;
            auxNode = node;
            node = node.next;
            node.next = auxNode;
            node.next.next = pointer
        }
        console.log(node?.val,node?.next?.val,node?.next?.next?.val,node?.next?.next?.next?.val)
        dfs(node.next.next);
        console.log(node?.val,node?.next?.val,node?.next?.next?.val,node?.next?.next?.next?.val)

        return node;
    }

    return dfs(head,0);
};