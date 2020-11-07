class Stack {
  #stack = [];

  push(ele) {
    this.#stack.push(ele);
  }

  pop() {
    return this.#stack.pop();
  }

  peek() {
    return this.#stack[this.#stack.length];
  }

  clear() {
    this.#stack.length = [];
  }

  get isEmpty() {
    return this.#stack.length === 0;
  }

  get size() {
    return this.#stack.length;
  }

  print(s = ' ') {
    console.log(this.isEmpty ? 'the stack is empty' : this.#stack.join(s));
  }
}

module.exports = Stack;
