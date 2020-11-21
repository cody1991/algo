const Node = require('./Node');
class Link {
  head = null;
  length = 0;

  append(ele) {
    const node = new Node(ele);

    if (this.head === null) {
      this.head = node;
    } else {
      let cur = this.head;
      while (cur.next) cur = cur.next;
      cur.next = node;
    }

    this.length++;
  }

  insert(pos, ele) {
    if (!(pos >= 0 && pos < this.length)) {
      console.error(
        `insert element ${ele} on position ${pos} is out of range (0, ${this.length})`
      );
      return;
    }
    const node = new Node(ele);

    if (pos === 0) {
      const cur = this.head;
      this.head = node;
      node.next = cur;
    } else {
      let pre = null;
      let cur = this.head;
      let curPos = 0;
      while (curPos < pos) {
        pre = cur;
        cur = cur.next;
        curPos += 1;
      }
      pre.next = node;
      node.next = cur;
    }

    this.length += 1;
  }

  remove(ele) {
    return this.removeAt(this.indexOf(ele));
  }

  removeAt(pos) {
    if (!(pos >= 0 && pos < this.length)) {
      console.error(
        `remove element on position ${pos} is out of range (0, ${this.length})`
      );
      return null;
    }

    let cur = this.head;
    let pre = null;
    if (pos === 0) {
      this.head = cur.next;
    } else {
      let curPos = 0;
      while (curPos < pos) {
        pre = cur;
        cur = cur.next;
        curPos++;
      }
      pre.next = cur.next;
    }

    this.length--;
    return cur;
  }

  indexOf(ele) {
    let index = 0;
    let cur = this.head;
    while (cur) {
      if (cur.ele === ele) {
        return index;
      }
      cur = cur.next;
      index++;
    }
    return -1;
  }

  print() {
    let cur = this.head;
    let str = '';

    while (cur) {
      str += `${cur.ele}`;
      if (cur.next) str += ' -> ';
      cur = cur.next;
    }

    console.log(str);
  }

  get isEmpty() {
    return this.size === 0;
  }

  get size() {
    return this.length;
  }
}
module.exports = Link;
