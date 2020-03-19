/*

Delete Middle Node: Implement an algorithm to delete a node in the 
middle (i.e. any node but the first and last, not necessarily the 
exact middle) of a singly linked list, given only access to that node.

EXAMPLE

Input: the node c from the linked list a-> b-> c-> d-> e-> f

Result: nothing is returned, but the new linked list looks 
like a-> b-> d-> e-> f

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

    removeNode(node) {
        let next = node.next
        node.data = next.data
        node.next = next.next
    }
  }

linkedList = new LinkedList();
nodeData = [1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 3, 6];
for (let i = 0; i < nodeData.length; i++) {
  linkedList.addToTail(nodeData[i]);
}
linkedList.print()
linkedList.removeNode(linkedList.head.next.next)
linkedList.print()