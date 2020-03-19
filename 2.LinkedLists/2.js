/*
Return Kth to Last: Implement an algorithm to find the Kth to last element in a singly linked list.
*/

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  print() {
    let current = this.head;
    console.log("Linked List Data:");
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }

  addToTail(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      let tail = this.head;
      while (tail.next) {
        tail = tail.next;
      }
      tail.next = newNode;
    }
  }
  addToHead(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  getLength() {
    let length = 0;
    let current = this.head;
    while (current) {
      length += 1;
      current = current.next;
    }
    return length
  }

  returnKthFromEnd(k) {
    let target = this.getLength()-k
    let current = this.head
    while (target > 0) {
        current = current.next
        target-=1
    }
    return current
  }
}

linkedList = new LinkedList();
nodeData = [1, 1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 3, 6];
for (let i = 0; i < nodeData.length; i++) {
  linkedList.addToTail(nodeData[i]);
}
let node = linkedList.returnKthFromEnd(3)
