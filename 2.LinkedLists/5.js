/*
Sum Lists: You have two numbers represented by a linked list, where each node contains a single digit. The digits are stored in REVERSE order, such that the 1's digit is the head of the list. Write a function that adds the two numbers and returns the sum as a linked list.

EXAMPLE
Input: (7->1->6) + (5-> 9-> 2). That is 617 + 295.
Output: 2->1->9. That is, 912

FOLLOW UP

Suppose the digits are stored in forward order. Repeat the above problem.

EXAMPLE
Input: (6->1->7) + (2->9->5). That is 617 + 295.
Output: 9->1->2. That is 912

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
  }

const sum = (linked1, linked2) => {
    returnList = new LinkedList()
    current1=linked1.head
    current2=linked2.head
    currSum = 0
    while (current1 || current2 || currSum > 0) {
        if (current1) {
            currSum+=current1.data
            current1 = current1.next
        }
        if (current2) {
            currSum+=current2.data
            current2= current2.next
        }
        nodeVal = currSum%10
        currSum -=nodeVal
        returnList.addToTail(nodeVal)
        if (currSum >=10) {
            currSum= currSum/10
        }
    }

    return returnList
}

linkedList1 = new LinkedList();
nodeData = [7,1,6];
for (let i = 0; i < nodeData.length; i++) {
  linkedList1.addToTail(nodeData[i]);
}

linkedList2 = new LinkedList();
nodeData = [5,9,2];
for (let i = 0; i < nodeData.length; i++) {
  linkedList2.addToTail(nodeData[i]);
}

list = sum(linkedList1, linkedList2)
list.print()
