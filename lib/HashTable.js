const Link = require('./Link');

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

    if (!this.#items[pos]) {
      this.#items[pos] = new Link();
    }

    this.#items[pos].append({
      key,
      val,
    });
  }

  remove(key) {
    const pos = this.loseHashCode(key);

    if (this.#items[pos]) {
      let cur = this.#items[pos].head;
      while (cur) {
        if (cur.ele.key === key) {
          this.#items[pos].remove(cur.ele);
          if (this.#items[pos].isEmpty) {
            this.#items[pos] = undefined;
          }
          return true;
        }
        cur = cur.next;
      }
    }
    return undefined;
  }

  get(key) {
    const pos = this.loseHashCode(key);
    if (this.#items[pos]) {
      let cur = this.#items[pos].head;
      while (cur) {
        if (cur.ele.key === key) {
          return cur.ele.val;
        }
        cur = cur.next;
      }
    }
    return undefined;
  }

  get items() {
    return this.#items;
  }
};
