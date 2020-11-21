class Stack {
  #stack = [];

  push(ele) {
    this.#stack.push(ele);
  }

  pop() {
    return this.#stack.pop();
  }

  peek() {
    return this.#stack[this.size - 1];
  }

  clear() {
    this.#stack = [];
  }

  get isEmpty() {
    return this.size === 0;
  }

  get size() {
    return this.#stack.length;
  }

  print(s = ' ') {
    console.log(this.isEmpty ? 'the stack is empty' : this.#stack.join(s));
  }
}

module.exports = Stack;
