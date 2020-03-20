/*

Intersection: Given two (singly) linked lists, determine if the two lists intersect. 
Return the intersecting node. Note that the intersetcion is defined based on reference, not value. 
That is, if the kth node of the first linked list is the exact same node (by reference) as the 
jth node of the second linked list, then they are intersecting.

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

const findIntersection = (linkedlist1, linkedlist2) => {
  console.log("find intersection");
  let current1 = linkedlist1.head;
  while (current1) {
    let current2 = linkedlist2.head;
    while (current2) {
      if (current1 === current2) {
        return current1;
      }
      current2 = current2.next;
    }
    current1 = current1.next;
  }
  return false;
};

linkedList = new LinkedList();
linkedList2 = new LinkedList();
nodeData = [1, 1, 2, 3, 4, 5, 6, 7, 8, 7, 6, 5, 4, 3, 2, 1, 1];
for (let i = 0; i < nodeData.length; i++) {
  let newNode = new Node(nodeData[i]);
  linkedList.addToTail(newNode);
  console.log("first for loop");
  if (i === 5) {
    console.log("i=5");
    const nodeData2 = [1, 2, 3, 4, 5, 6, 7];
    for (let j = 0; j < nodeData2.length; j++) {
      console.log("second for loop");
      let newNode2 = new Node(nodeData2[i]);
      console.log("newNode2", newNode2);
      linkedList2.addToTail(newNode2);
      if ((j = 6)) {
        console.log("j=4");
        linkedList2.addToTail(newNode);
      }
    }
  }
}

result = findIntersection(linkedList, linkedList2);
console.log(result);
