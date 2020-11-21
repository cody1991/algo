const Queue = require('./Queue');

class PriorityQueueItem {
  constructor(ele, priority) {
    this.ele = ele;
    this.priority = priority;
  }
}

class PriorityQueue extends Queue {
  constructor() {
    super();
  }

  enqueue(ele, priority) {
    const priorityQueueItem = new PriorityQueueItem(ele, priority);
    let isAdded = false;
    for (let index = 0; index < this.size; index += 1) {
      const item = this.queue[index];
      if (item.priority < priorityQueueItem.priority) {
        this.queue.splice(index, 0, priorityQueueItem);
        isAdded = true;
        break;
      }
    }
    if (!isAdded) this.queue.push(priorityQueueItem);
  }

  print(s = '\n') {
    console.log(
      this.isEmpty
        ? 'the queue is empty'
        : this.queue.map((item) => `${item.ele} - ${item.priority}`).join(s)
    );
  }
}

module.exports = PriorityQueue;
