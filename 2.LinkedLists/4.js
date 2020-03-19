/*
Partition: Write code to partition a linked list around a value, x, 
such that all nodes less than x come before all nodes greater than or equal to x. 
If x is contained within the list, the values of x only need to be after 
the elements less than x (see below). The partition element can appear anywhere 
in the "right partition"; it does not need to appear between the left and right partitions.

EXAMPLE

Input: 3 -> 5 -> 8-> 5 -> 10 -> 2-> 1[partition=5]
Output: 3 -> 1 -> 2 -> 10 -> 5 -> 5 -> 8
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
    print(additionalDescription="") {
      let current = this.head;
      let values = []
      while (current) {
        values.push(current.data)
        current = current.next;
      }
      console.log(`${additionalDescription} LinkedList Data: ${values}`)
    }
  
    addToTail(data) {
        console.log(`addToTail ${data}`)
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


const createPartition=(aLinkedList, partition) =>{
    let overParVal = 0
    let current = aLinkedList.head
    while(current) {
        length+=1
        if (current.data >= partition) {
            overParVal +=1
        }
        current = current.next
    }
    current = aLinkedList.head
    while (overParVal > 0) {
        // console.log(`current.data( ${current.data} ) >= ${partition}? ${current.data >= partition}\n\tUnderParVal: ${overParVal}`)
        if (current.data >= partition) {
            linkedList.addToTail(current.data)
            linkedList.removeNode(current)
            // aLinkedList.print(1)
            overParVal-=1
        }
        else {
            current = current.next
        }
    }
    // aLinkedList.print("final")
    return aLinkedList
}

linkedList = new LinkedList();
nodeData = [1,6, 2, 3, 5, 6, 7, 8, 9, 4, 10, 3];
for (let i = 0; i < nodeData.length; i++) {
  linkedList.addToTail(nodeData[i]);
}

createPartition(linkedList, 5)