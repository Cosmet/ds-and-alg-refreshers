import { Node } from './Node';

export class LinkedList {

  public head: Node | null;
  public tail: Node | null;

  constructor () {
    this.head = null;
    this.tail = null;
  }

  public addToTail = (val: any) => {
    const node = new Node(val);

    if (!this.tail) {
      this.tail = node;
      this.head = node;
    } else {
      const oldTail = this.tail;
      oldTail.next = node;
      node.previous = oldTail;
      this.tail = node;
    }

    return node.value;
  }

  public removeTail = () => {
    const removedTail = this.tail;
    if (!removedTail) {
      return null;
    }

    if (!removedTail.previous) {
      this.tail = null;
      this.head = null;
    } else {
      this.tail = removedTail.previous as Node;
      this.tail.next = null;
    }

    return removedTail.value;
  }

  public addToHead = (val: any) => {
    const node = new Node(val);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      const oldHead = this.head;
      oldHead.previous = node;
      node.next = oldHead;
      this.head = node;
    }

    return node.value;
  }

  public removeHead = () => {
    const removedHead = this.head;

    if (!removedHead) {
      return null;
    }

    if (!removedHead.next) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = removedHead.next as Node;
      this.head.previous = null;
    }

    return removedHead.value;
  }

  public search = (matcher: any) => {
    let currentNode = this.head;

    while (currentNode) {
      const { value } = currentNode;
      if (
        (typeof matcher === 'function' && matcher(value))
        || matcher === value
      ) {
        return value;
      }

      currentNode = currentNode.next;
    }

    return null;
  }
}
