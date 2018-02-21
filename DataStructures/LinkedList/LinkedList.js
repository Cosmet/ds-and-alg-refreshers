class Node {
  constructor(val = null) {
    this.previous = null;
    this.next = null;
    this.value = val;
  }
}

class LinkedList extends Node {
  constructor() {
    super();
    this.head = null;
    this.tail = null;
  }

  addToTail() {

  }

  removeTail() {

  }

  addToHead() {

  }

  removeHead() {

  }

  search() {

  }
}

module.exports = {
  Node,
  LinkedList,
};
