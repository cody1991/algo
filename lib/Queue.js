class Queue {
  queue = [];

  enqueue(ele) {
    this.queue.push(ele);
  }

  dequeue() {
    return this.queue.shift();
  }

  get front() {
    return this.queue[0];
  }

  get isEmpty() {
    return this.size === 0;
  }

  get size() {
    return this.queue.length;
  }

  print(s = '\n') {
    console.log(
      this.isEmpty
        ? 'the queue is empty'
        : this.queue.map((item) => `${item.ele} - ${item.priority}`).join(s)
    );
  }
}

module.exports = Queue;
