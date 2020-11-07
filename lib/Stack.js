class Stack {
  #item = [];

  push(ele) {
    this.#item.push(ele);
  }

  pop() {
    return this.#item.pop();
  }

  peek() {
    return this.#item[this.#item.length];
  }

  clear() {
    this.#item.length = [];
  }

  get isEmpty() {
    return this.#item.length === 0;
  }

  get size() {
    return this.#item.length;
  }

  print(s = ' ') {
    console.log(this.isEmpty ? 'the stack is empty' : this.#item.join(s));
  }
}

module.exports = Stack;
