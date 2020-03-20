/*
Loop Detection: Given a circular linked list, implement an algorithm that returns the node at the beginning of the loop.

DEFINITION
Circular linked list: A (corrupt) linked list in which a node's next pointer points to an earlier node, 
so as to make a loop in the linked list.

EXAMPLE
Input: A -> B -> C -> D -> E -> C[the same C as earlier]
Output: C
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
  print(additionalDescription = "") {
    let current = this.head;
    let values = [];
    while (current) {
      values.push(current.data);
      current = current.next;
    }
    console.log(`${additionalDescription} LinkedList Data: ${values}`);
  }

  addToTail(newNode) {
    // console.log("addToTail: ", newNode);
    // const newNode = new Node(data);
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
  addToHead(newNode) {
    // const newNode = new Node(data);
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
    return length;
  }
}

const loopDetection = linkedList => {
  let slow = linkedList.head;
  let fast = linkedList.head.next;
  let i = 0;
  while (slow) {
    if (fast === slow) {
      return fast;
    }
    if (i % 2 == 0) {
      slow = slow.next;
    }
    fast = fast.next;
    i += 1;
  }
  return false;
};

const linkedList = new LinkedList();
nodeData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let specialNode = {};
let newNode = {};
for (let i = 0; i < nodeData.length; i++) {
  if (i != 9) {
    newNode = new Node(nodeData[i]);
    linkedList.addToTail(newNode);
  }
  if (i === 7) {
    specialNode = newNode;
  }
  if (i === 9) {
    newNode = new Node(nodeData[i], specialNode);
    linkedList.addToTail(newNode);
  }
}

result = loopDetection(linkedList);
if (result) {
  console.log(result.data);
} else {
  console.log(result);
}
