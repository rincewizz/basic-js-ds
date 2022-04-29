const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor(){
    this.head = null;
  }
  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    if(this.head){
      let tail=this.head;
      while(tail.next){
        tail=tail.next;
      }
      tail.next = new ListNode(value);

    }else{
      this.head = new ListNode(value);
    }
  }

  dequeue() {
    let rm = this.head;
    rm.next - null;
    this.head = this.head.next;
    return rm.value;
  }
}

module.exports = {
  Queue
};
