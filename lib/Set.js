class CustomSet {
  #items = {};
  has(val) {
    return this.#items.hasOwnProperty(val);
  }
  remove(val) {
    if (!this.has(val)) return false;
    delete this.#items[val];
    return true;
  }
  add(val) {
    if (this.has(val)) return false;
    this.#items[val] = val;
    return val;
  }
  clear() {
    this.#items = {};
  }
  get size() {
    return Object.keys(this.#items).length;
  }
  get keys() {
    return Object.keys(this.#items);
  }
  get values() {
    return Object.values(this.#items);
  }
  get items() {
    return this.#items;
  }
}

module.exports = CustomSet;
