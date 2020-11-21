class CustomMap {
  #items = {};
  set(key, val) {
    this.#items[key] = val;
  }
  get(key) {
    if (this.has(key)) {
      return this.#items[key];
    }
    return undefined;
  }
  has(key) {
    return this.#items.hasOwnProperty(key);
  }
  delete(key) {
    if (this.has(key)) {
      delete this.#items[key];
      return true;
    }
    return false;
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
  get size() {
    return this.keys.length;
  }
  clear() {
    this.#items = {};
  }
}

module.exports = CustomMap;
