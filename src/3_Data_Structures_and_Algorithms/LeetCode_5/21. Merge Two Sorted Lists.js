21. Merge Two Sorted Lists

Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

Hide Company Tags Amazon LinkedIn Apple Microsoft
Hide Tags Linked List
Hide Similar Problems (H) Merge k Sorted Lists (E) Merge Sorted Array (M) Sort List (M) Shortest Word Distance II

Example
Given 1->3->8->11->15->null, 2->null , return 1->2->3->8->11->15->null.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// 谁小谁出列！
// dummy node
var mergeTwoLists = function(l1, l2) {
  let dummy = new ListNode(0);
  // do not move dummy, have a lastNode, move lastNode
  let lastNode = dummy;
  while (l1 !== null && l2 !== null) {
      if (l1.val <= l2.val) {
          lastNode.next = l1;
          l1 = l1.next;
      } else {
          lastNode.next = l2;
          l2 = l2.next;
      }
      lastNode = lastNode.next;
  }
  // 要是list1多出来 就把多出来的一段连上就好了，不用再手动copy一遍
  // 这时候不用while，用if，不然超时，因为不会再移动l1,会卡住
  if (l1 !== null) {
      lastNode.next = l1;
  } else {
      lastNode.next = l2;
  }
  return dummy.next;
};
