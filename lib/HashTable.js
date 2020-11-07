module.exports = class HashTable {
  #items = [];

  loseHashCode(key) {
    let hash = 0;

    for (let index = 0; index < key.length; index += 1) {
      hash += key[index].charCodeAt();
    }

    return hash % 37;
  }

  djb2HashCode(key) {}

  put(key, val) {
    const pos = this.loseHashCode(key);
    console.log(`${pos} - ${val}`);
    this.#items[pos] = val;
  }

  remove(key) {
    this.#items[this.loseHashCode(key)] = undefined;
  }

  get(key) {
    return this.#items[this.loseHashCode(key)];
  }

  get items() {
    return this.#items;
  }
};
