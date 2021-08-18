class Queue {
  constructor() {
    this.queue = [];
    // this is an arbitrary value to make testing easier
    // 1,024 would be way too high to test!
    this.limit = 10;
  }

  // add item to rear of queue if not full
  // if full throw error
  enqueue(item) {
    if(!this.isFull()){
      this.queue.push(item)
    } else {
      throw new Error("queue is full")
    }
  }

  // remove item from front of queue and return it
  dequeue() {
    return this.queue.shift()
  }

  // return item at front of queue without removing it
  peek() {
    return this.queue[0]
  }

  // return true if queue is empty, otherwise false
  isEmpty() {
    if(this.queue.length === 0){
      return true
    } else {
      return false
    }
  }

  // return true if queue is full, otherwise false
  isFull() {
    if(this.queue.length === this.limit){
      return true
    } else {
      return false
    }
  }

  // return number of items in queue
  size() {
    return this.queue.length
  }

  // return -1 if item not in queue, otherwise integer representing 
  // how far it is from the front
  search(target) {
    return this.queue.indexOf(target)
  }

  // print contents of queue: do not return the queue itself!
  print() {
    this.queue.forEach(element => console.log(element))
  }
}

if (require.main === module) {
  // add your own tests in here
  let testQueue = new(Queue)

  console.log("Expecting: true")
  console.log(testQueue.isEmpty())

  console.log("Expecting: 0")
  console.log(testQueue.size())
  
  console.log("Adding to queue...")
  console.log(testQueue.enqueue(0))
  console.log(testQueue.enqueue(1))
  console.log(testQueue.enqueue(2))
  console.log(testQueue.enqueue(3))
  console.log(testQueue.enqueue(4))
  console.log(testQueue.enqueue(5))
  console.log(testQueue.enqueue(6))
  console.log(testQueue.enqueue(7))
  console.log(testQueue.enqueue(8))
  console.log(testQueue.enqueue(9))
  
  console.log("Expecting: true")
  console.log(testQueue.isFull())
  
  console.log("Expecting: 0")
  console.log(testQueue.dequeue())
  
  console.log("Expecting: 1")
  console.log(testQueue.peek())
  
  console.log("Expecting: 1, 2, 3, 4, 5, 6, 7, 8, 9")
  console.log(testQueue.print())
  
  console.log("Expecting: 2")
  console.log(testQueue.search(3))
  
  console.log("Expecting: -1")
  console.log(testQueue.search(20))

  testQueue.enqueue(10)

  console.log("Expecting: Error: 'Stack is full'")
  console.log(testQueue.enqueue(11))

}

module.exports = Queue;
