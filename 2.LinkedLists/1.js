/*
Remove Dups: Write code to remove duplicates from an unsorted linked list.

FOLLOW UP

How would you solve this problem if a temporary buffer is not allowed?

*/

//basic linked list
class Node {
    constructor(data, next=null) {
    this.data = data
    this.next = next
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }
    print() {
        let current = this.head
        console.log("Linked List Data:")
        while (current) {
            console.log(current.data)
            current = current.next
        }
    }

    addToTail (data) {
        const newNode = new Node(data)
        if (!this.head) {
            this.head = newNode
        } else {
            let tail = this.head
            while(tail.next) {
                tail = tail.next
            }
            tail.next = newNode
        }

    }
    addToHead (data) {
        const newNode = new Node(data)
        if (!this.head) {
            this.head = newNode
        } else {
            newNode.next = this.head
            this.head = newNode
        }
    }

    remove (data) {
        let nodeToDelete = this.head
        let prev = null
        while (nodeToDelete.data != data) {
            prev = nodeToDelete
            nodeToDelete = nodeToDelete.next
        }
        prev.next = nodeToDelete.next
    }
    removeDuplicates () {
        let slow = this.head
        while (slow) {
            let fast = slow.next
            let prev = slow
            while (fast) {
                if (slow.data ===fast.data) {
                    prev.next = fast.next
                    fast = fast.next
                } else {
                    prev = fast
                    fast= fast.next
                }
            }
            slow = slow.next
        }
    }
}

linkedList = new LinkedList()
nodeData = [1,1,1,2,3,4,5,6,7,8,9,10,3,6]
for (let i=0; i< nodeData.length; i++) {
    linkedList.addToTail(nodeData[i])
}
linkedList.removeDuplicates()
linkedList.print()