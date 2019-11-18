// 节点
function Node(val) {
  this.val = val;
  this.next = null;
}

function ListNode() {
  this.head = new Node('head'); // 头节点

  // 查找节点
  this.find = function (item) {
    var currNode = this.head;
    while (currNode.val !== item) {
      currNode = currNode.next;
    }
    return currNode;
  };

  // 插入节点
  this.insert = function (newVal, item) {
    var newNode = new Node(newVal);
    var currNode = this.find(item);
    newNode.next = currNode.next;
    currNode.next = newNode;
  };

  // 删除节点
  this.remove = function (item) {
    var prevNode = this.findPrev(item);
    if (prevNode.next !== null) {
      prevNode.next = prevNode.next.next;
    }
  };

  // 查找上一个节点
  this.findPrev = function (item) {
    var currNode = this.head;
    while ((currNode.next.val !== item) && (currNode.next !== null)) {
      currNode = currNode.next;
    }
    return currNode;
  };

  // 显示链表
  this.display = function () {
    var currNode = this.head;
    while (currNode.next !== null) {
      console.log(currNode.next.val);
      currNode = currNode.next;
    }
  };

}