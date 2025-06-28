/**
 * Given the head of a linked list, remove the nth node from the end of the list and return its head.
 *
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let length = 0;
  let counter = 0;
  let auxNode = null;
  let flag = false;

  const deepFirstSearch = (node) => {
    if (!node) return null;
    length++;
    deepFirstSearch(node.next);
    counter++;
    if (counter === n) auxNode = node;
    if (auxNode === head) return auxNode.next;
    if (counter > n && !flag){
        flag = true;
        node.next = auxNode.next;
    }
    return node;
  };
  return deepFirstSearch(head);
};
