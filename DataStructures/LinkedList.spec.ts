import { LinkedList } from './LinkedList';
import { Node } from './Node';

describe('Linked List', () => {
  let fullList;
  let emptyList;

  const resetLists = () => {
    emptyList = new LinkedList();
    fullList = new LinkedList();
    const firstNode = new Node(10);
    const secondNode = new Node(20);
    const thirdNode = new Node(30);
    fullList.head = firstNode;
    firstNode.next = secondNode;
    secondNode.previous = firstNode;
    secondNode.next = thirdNode;
    thirdNode.previous = secondNode;
    fullList.tail = thirdNode;
  };

  beforeEach(resetLists);

  it('Node has correct values', () => {
    const emptyNode = new Node();
    const fiveNode = new Node(5);

    expect(emptyNode.value).toEqual(null);
    expect(fiveNode.value).toEqual(5);
    expect(fiveNode.previous).toEqual(null);
    expect(fiveNode.next).toEqual(null);
  });

  it('Empty list has no head or tail', () => {
    expect(emptyList.head).toEqual(null);
    expect(emptyList.tail).toEqual(null);
  });

  it('Full list is set correctly', () => {
    const { head, tail } = fullList;

    expect(head.previous).toEqual(null);
    expect(head.value).toEqual(10);
    expect(head.next.value).toEqual(20);

    expect(head.next.previous).toEqual(head);
    expect(head.next.value).toEqual(20);
    expect(head.next).toEqual(tail.previous);
    expect(tail.previous.value).toEqual(20);
    expect(tail.previous.next).toEqual(tail);

    expect(tail.previous.value).toEqual(20);
    expect(tail.value).toEqual(30);
    expect(tail.next).toEqual(null);
  });

  describe('Add To Tail', () => {

    beforeEach(resetLists);

    it('Has addToTail method', () => {
      expect(typeof fullList.addToTail).toEqual('function');
    });

    it('Adds a new tail', () => {
      fullList.addToTail(40);

      expect(fullList.tail.value).toEqual(40);
    });

    it('One node in list should be both head and tail', () => {
      emptyList.addToTail(10);

      expect(emptyList.tail.value).toEqual(10);
      expect(emptyList.head).toEqual(emptyList.tail);
    });

    it('One node in list should have no next or previous', () => {
      emptyList.addToTail(10);

      expect(emptyList.head.previous).toEqual(null);
      expect(emptyList.head.next).toEqual(null);
      expect(emptyList.tail.previous).toEqual(null);
      expect(emptyList.tail.next).toEqual(null);
    });

    it('New tail next is NULL', () => {
      fullList.addToTail(40);

      expect(fullList.tail.value).toEqual(40);
      expect(fullList.tail.next).toEqual(null);
    });

    it('New tail previous is old tail', () => {
      const oldTail = fullList.tail;
      fullList.addToTail(40);

      expect(fullList.tail.value).toEqual(40);
      expect(fullList.tail.previous).toEqual(oldTail);
    });

    it('Old tail next is new tail', () => {
      const oldTail = fullList.tail;
      fullList.addToTail(40);

      expect(fullList.tail.value).toEqual(40);
      expect(oldTail.next).toEqual(fullList.tail);
    });

    it('Adds multiples nodes to tail properly', () => {
      emptyList.addToTail(10);
      emptyList.addToTail(20);
      emptyList.addToTail(30);

      const { head, tail } = emptyList;

      expect(head.previous).toEqual(null);
      expect(head.value).toEqual(10);
      expect(head.next.value).toEqual(20);

      expect(head.next.previous).toEqual(head);
      expect(head.next.value).toEqual(20);
      expect(head.next).toEqual(tail.previous);
      expect(tail.previous.value).toEqual(20);
      expect(tail.previous.next).toEqual(tail);

      expect(tail.previous.value).toEqual(20);
      expect(tail.value).toEqual(30);
      expect(tail.next).toEqual(null);
    });
  });

  describe('Remove Tail', () => {

    beforeEach(resetLists);

    it('Has removeTail method', () => {
      expect(typeof fullList.removeTail).toEqual('function');
    });

    it('Returns the correct value', () => {
      expect(fullList.removeTail()).toEqual(30);
    });

    it('Removes tail node', () => {
      fullList.removeTail();

      expect(fullList.tail.value).toEqual(20);
    });

    it('New tail next value is NULL', () => {
      fullList.removeTail();

      expect(fullList.tail.next).toEqual(null);
    });

    it('Removes all nodes properly', () => {
      fullList.removeTail();
      fullList.removeTail();
      fullList.removeTail();

      expect(fullList.head).toEqual(null);
      expect(fullList.tail).toEqual(null);
    });

    it('If there is no tail returns NULL', () => {
      expect(emptyList.removeTail()).toEqual(null);
    });
  });

  describe('Add To Head', () => {

    beforeEach(resetLists);

    it('Has addToHead method', () => {
      expect(typeof fullList.addToHead).toEqual('function');
    });

    it('Adds a new head', () => {
      fullList.addToHead(-10);

      expect(fullList.head.value).toEqual(-10);
    });

    it('One node in list should be both head and tail', () => {
      emptyList.addToHead(10);

      expect(emptyList.head.value).toEqual(10);
      expect(emptyList.head).toEqual(emptyList.tail);
    });

    it('One node in list should have no next or previous', () => {
      emptyList.addToHead(10);

      expect(emptyList.head.previous).toEqual(null);
      expect(emptyList.head.next).toEqual(null);
      expect(emptyList.tail.previous).toEqual(null);
      expect(emptyList.tail.next).toEqual(null);
    });

    it('New head previous is NULL', () => {
      fullList.addToHead(-10);

      expect(fullList.head.value).toEqual(-10);
      expect(fullList.head.previous).toEqual(null);
    });

    it('New head next is old head', () => {
      const oldHead = fullList.head;
      fullList.addToHead(-10);

      expect(fullList.head.value).toEqual(-10);
      expect(fullList.head.next).toEqual(oldHead);
    });

    it('Old head previous is new head', () => {
      fullList.addToHead(-10);

      expect(fullList.head.value).toEqual(-10);
      expect(fullList.head.next.previous).toEqual(fullList.head);
    });

    it('Adds multiples nodes to head properly', () => {
      emptyList.addToHead(30);
      emptyList.addToHead(20);
      emptyList.addToHead(10);

      const { head, tail } = emptyList;

      expect(head.previous).toEqual(null);
      expect(head.value).toEqual(10);
      expect(head.next.value).toEqual(20);

      expect(head.next.previous).toEqual(head);
      expect(head.next.value).toEqual(20);
      expect(head.next).toEqual(tail.previous);
      expect(tail.previous.value).toEqual(20);
      expect(tail.previous.next).toEqual(tail);

      expect(tail.previous.value).toEqual(20);
      expect(tail.value).toEqual(30);
      expect(tail.next).toEqual(null);
    });
  });

  describe('Remove Head', () => {

    beforeEach(resetLists);

    it('Has removeHead method', () => {
      expect(typeof fullList.removeHead).toEqual('function');
    });

    it('Returns the correct value', () => {
      expect(fullList.removeHead()).toEqual(10);
    });

    it('Removes head node', () => {
      fullList.removeHead();

      expect(fullList.head.value).toEqual(20);
    });

    it('New head previous value is NULL', () => {
      fullList.removeHead();

      expect(fullList.head.previous).toEqual(null);
    });

    it('Removes all nodes', () => {
      fullList.removeHead();
      fullList.removeHead();
      fullList.removeHead();

      expect(fullList.head).toEqual(null);
      expect(fullList.tail).toEqual(null);
    });

    it('If there is no head returns NULL', () => {
      expect(emptyList.removeHead()).toEqual(null);
    });
  });

  describe('Search', () => {

    beforeEach(resetLists);

    it('Has search', () => {
      expect(typeof fullList.search).toEqual('function');
    });

    it('Returns the correct value given a value', () => {
      const correctValue = 10;
      const incorrectValue = 'wrong';

      expect(fullList.search(correctValue)).toEqual(correctValue);
      expect(fullList.search(incorrectValue)).toEqual(null);
    });

    it('Returns the correct value given a function', () => {
      const correctValue = 10;
      const incorrectValue = 'wrong';
      const correctFunc = (val) => val % correctValue === 0;
      const incorrectFunc = (val) => val === incorrectValue;

      expect(fullList.search(correctFunc)).toEqual(correctValue);
      expect(fullList.search(incorrectFunc)).toEqual(null);
    });
  });
});
