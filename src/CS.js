class Node {
    constructor (data, next = null) {
        this.data = []
    }
}


class Stack {
    constructor() {
        this.head = null
    }

    push (data) {
        this.head = new Node(data, this.head)
    }

    pop () {
        let data = this.head.data
        this.head = this.head.next
        return data
    }

    peek () {
        return this.data[this.data.length - 1]
    }
}

//// LINKED LIST - QUEUES:

class Node {
    constructor (data, next=null, prev=null) {
        this.head = null
        this.tail = null
    }

    enqueue (data) {
        let newNode = new Node (data, null, this.head)
        if (!this.head) {
            this.head = newNode
        } else {
            this.tail.next = newNode
            newNode.prev = this.tail
        }
        this.tail = newNode
    }

    dequeue (data) {

    }

    peek () {
        return this.head.data
    }
}

//// Ali's solution for Queues:

class Queue {
    constructor () {
      this.data = []
    }
    
    enqueue (data) {
      this.data.unshift(data)
    }
    
    dequeue () {
      return this.data.pop()
    }
    
    peek () {
      return this.data[this.data.length - 1]
    }
  }
  
  queue = new Queue()
  queue.enqueue(1)
  queue.enqueue(5)
  queue.enqueue(10)
  console.log(queue.dequeue())
  console.log(queue.peek())
