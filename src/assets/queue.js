export default class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // create new nodes
  newNode(value, next = null) {
    return { value, next };
  }

  // add node to back of queue
  enqueue(value) {
    if (!this.head) {
      this.head = this.newNode(value);
      this.tail = this.head;
      return this.head;
    }
    this.tail.next = this.newNode(value);
    this.tail = this.tail.next;
    return this.head;
  }

  // remove and return node from front of queue
  dequeue() {
    if (this.isEmpty()) {
      console.log('queue is empty, nothing to dequeue');
      return null;
    }
    const dequeuedValue = this.head.value;

    this.head = this.head.next;
    if (!this.head) {
      this.tail = null;
    }

    return dequeuedValue;
  }

  // check if queue is empty
  isEmpty() {
    return this.head === null;
  }
}
