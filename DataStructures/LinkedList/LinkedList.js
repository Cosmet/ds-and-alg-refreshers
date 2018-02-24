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

  addToTail(val) {
    const node = new Node(val);
    if (!this.tail) {
      this.tail = node;
      this.head = this.tail;
    } else {
      const oldTail = this.tail;
      oldTail.next = node;
      node.previous = oldTail;
      this.tail = node;
    }
  }

  removeTail() {
    const removedTail = this.tail;
    if (!removedTail) {
      return null;
    } else if (!removedTail.previous) {
      this.tail = null;
      this.head = null;
    } else {
      this.tail = removedTail.previous;
      this.tail.next = null;
    }
    return removedTail.value;
  }

  addToHead(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      const oldHead = this.head;
      oldHead.previous = node;
      node.next = oldHead;
      this.head = node;
    }
  }

  removeHead() {
    const removedHead = this.head;
    if (!removedHead) {
      return null;
    } else if (!removedHead.next) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = removedHead.next;
      this.head.previous = null;
    }
    return removedHead.value;
  }

  search(searchValue) {
    let currentNode = this.head;

    while (currentNode) {
      const { value } = currentNode;
      if (typeof searchValue === 'function' && searchValue(value)) {
        return value;
      } else if (value === searchValue) {
        return value;
      }
      currentNode = currentNode.next;
    }
    return null;
  }
}

module.exports = {
  Node,
  LinkedList,
};
