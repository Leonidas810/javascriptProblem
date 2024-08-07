/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    if (lists.length == 0) return null;

    let header = new ListNode();
    let cont = 0;
    lists.forEach(function (list) {
        let pivote = header;
        cont++;
        while (list) {
            if (list.length == 0) break;
            if (pivote.next == null) {//Final
                pivote.val = list.val;
                if (list.next == null && cont == lists.length) break;
                pivote.next = new ListNode();
                list = list.next;
                pivote = pivote.next;
            } else if (pivote.val > list.val) {//Incio
                let newNode = new ListNode();
                newNode.val = list.val;
                newNode.next = pivote;
                header = newNode;
                list = list.next;
            } else if ((pivote.val == list.val) || (pivote.val < list.val && pivote.next.val > list.val)) {//En medio
                let newNode = new ListNode();
                newNode.val = list.val;
                newNode.next = pivote.next;
                pivote.next = newNode;
                list = list.next;
                pivote = newNode;
            } else {
                pivote = pivote.next;
            }
        }
    });

    return (header.val == 0 && header.next == null) ? null : header;
};
