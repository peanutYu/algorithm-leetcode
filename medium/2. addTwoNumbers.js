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

function ListNode(val) {
  this.val = val;
  this.next = null;
}


var addTwoNumbers = function (l1, l2) {
  var listNode;
  var first;
  var current = 0;
  while (l1 || l2 || current) {
    current = (l1 && l1.val || 0) + (l2 && l2.val || 0) + current;
    var listVal = 0;
    if (current >= 10) {
      listVal = current - 10;
      current = 1;
    } else {
      listVal = current;
      current = 0;
    }
    l1 = l1 && l1.next;
    l2 = l2 && l2.next;
    if (listNode) {
      listNode.next = new ListNode(listVal);
      listNode = listNode.next;
    } else {
      listNode = new ListNode(listVal);
      first = listNode;
    }
  }
  return first;
};

const l1 = {
  val: 2,
  next: {
    val: 4,
    next: {
      val: 3,
      next: null,
    },
  },
};

const l2 = {
  val: 5,
  next: {
    val: 6,
    next: {
      val: 4,
      next: null,
    },
  },
};



console.log(addTwoNumbers(l1, l2));
