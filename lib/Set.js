class CustomSet {
  #items = {};
  get(key) {
    return this.#items[key];
  }
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

  union(set) {
    const result = new CustomSet();
    for (let index = 0; index < this.size; index++) {
      result.add(this.values[index]);
    }

    for (let index = 0; index < set.size; index++) {
      result.add(set.values[index]);
    }

    return result;
  }

  intersection(set) {
    const result = new CustomSet();

    for (let index = 0; index < this.size; index++) {
      const val = this.values[index];
      if (set.has(val)) {
        result.add(val);
      }
    }

    return result;
  }

  difference(set) {
    const result = new CustomSet();

    for (let index = 0; index < this.size; index++) {
      const val = this.values[index];
      if (!set.has(val)) {
        result.add(val);
      }
    }

    return result;
  }
}

module.exports = CustomSet;
