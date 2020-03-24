/*
Stack Min: How would you design a stack which, in addition to push and pop has a function min which returns 
the minimum element? Push, pop, and min shoulld all operate in o(1) time.
*/

//Ammortized time should be O(1). In order for this to be truly O(1), you could store the min value  on each
// node when added to the linkedList. That solution takes much more space, for a pretty small gain since the 
//calcMin function (assuming not worst case scenario) would not run all that often.

class Stack {
  constructor() {
    this.min = null;
    this.storage = new LinkedList();
  }

  push(value) {
    if (this.min === null || this.min > value) {
      this.min = value;
    }
    this.storage.addToHead(value);
  }
  pop() {
    let returnVal = this.storage.removeFromHead();
    if (returnVal == this.min) {
      this.calcMin();
    }
    return returnVal;
  }

  getMin() {
    return this.min;
  }
  calcMin() {
    let min = this.storage.head.data;
    let current = this.storage.head.next;
    while (current) {
      if (min > current.data) {
        min = current.data;
      }
      current = current.next;
    }
    this.min = min;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
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

  removeFromHead() {
    let removed = this.head;
    this.head = this.head.next;
    return removed.data;
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

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = null;
  }
}

stack = new Stack();
data = [5, 3, 7, 8, 3, 2, 4, 1];
for (let i = 0; i < data.length; i++) {
  stack.push(data[i]);
}
let min = stack.getMin();

console.log("min: ", min);
let item = stack.pop();
console.log("popped item: ", item);
min = stack.getMin();
console.log("newMin: ", min);
