/*
Palindrome: Implement a function to check if a linked list is a palindrome.

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
    return length;
  }
}    

const isPalindrome=(linkedList)=> {
    let length = linkedList.getLength()
    let reverseListLen = Math.floor(length/2)
    current = linkedList.head
    reverseList = new LinkedList()
    while (reverseListLen > 0) {
        reverseList.addToHead(current.data)
        current = current.next
        reverseListLen-=1
    }
    //if there is a middle number
    if (length % 2 !=0 ) {
        current = current.next
    }
    // console.log(current.data)
    let currRev = reverseList.head
    while(current) {
        // console.log(`Curr1 ${curr1.data}, curr2 ${curr2.data}`)
        if (current.data != currRev.data) {
            return false
        }
        // curr1 = curr1.next
        currRev = currRev.next
        current = current.next
    }
    return true
}

linkedList = new LinkedList();
nodeData = [1, 1, 2, 3, 4, 5, 6, 7, 8, 7,6,5,4,3,2,1,1];
for (let i = 0; i < nodeData.length; i++) {
  linkedList.addToTail(nodeData[i]);
}
linkedList.print()
result = isPalindrome(linkedList)
console.log(result)

linked = new LinkedList()
nodeData = [1, 1, 2, 3, 4, 5, 7, 8, 7,6,5,4,3,2,1,1];
for (let i = 0; i < nodeData.length; i++) {
  linked.addToTail(nodeData[i]);
}
linked.print()
result = isPalindrome(linked)
console.log(result)