const { Node, LinkedList } = require('./LinkedList');

const { expect, assert } = require('chai');

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

    expect(emptyNode.value).to.equal(null);
    expect(fiveNode.value).to.equal(5);
    expect(fiveNode.previous).to.equal(null);
    expect(fiveNode.next).to.equal(null);
  });

  it('Empty list has no head or tail', () => {
    expect(emptyList.head).to.equal(null);
    expect(emptyList.tail).to.equal(null);
  });

  it('Full list is set correctly', () => {
    const { head, tail } = fullList;

    expect(head.previous).to.equal(null);
    expect(head.value).to.equal(10);
    expect(head.next.value).to.equal(20);

    expect(head.next.previous).to.equal(head);
    expect(head.next.value).to.equal(20);
    expect(head.next).to.equal(tail.previous);
    expect(tail.previous.value).to.equal(20);
    expect(tail.previous.next).to.equal(tail);

    expect(tail.previous.value).to.equal(20);
    expect(tail.value).to.equal(30);
    expect(tail.next).to.equal(null);
  });

  describe('Add To Tail', () => {

    beforeEach(resetLists);

    it('Has addToTail method', () => {
      assert.isFunction(fullList.addToTail);
    });

    it('Adds a new tail', () => {
      fullList.addToTail(40);

      expect(fullList.tail.value).to.equal(40);
    });

    it('One node in list should be both head and tail', () => {
      emptyList.addToTail(10);

      expect(emptyList.tail.value).to.equal(10);
      expect(emptyList.head).to.equal(emptyList.tail);
    });

    it('One node in list should have no next or previous', () => {
      emptyList.addToTail(10);

      expect(emptyList.head.previous).to.equal(null);
      expect(emptyList.head.next).to.equal(null);
      expect(emptyList.tail.previous).to.equal(null);
      expect(emptyList.tail.next).to.equal(null);
    });

    it('New tail next is NULL', () => {
      fullList.addToTail(40);

      expect(fullList.tail.value).to.equal(40);
      expect(fullList.tail.next).to.equal(null);
    });

    it('New tail previous is old tail', () => {
      const oldTail = fullList.tail;
      fullList.addToTail(40);

      expect(fullList.tail.value).to.equal(40);
      expect(fullList.tail.previous).to.equal(oldTail);
    });

    it('Old tail next is new tail', () => {
      const oldTail = fullList.tail;
      fullList.addToTail(40);

      expect(fullList.tail.value).to.equal(40);
      expect(oldTail.next).to.equal(oldTail);
    });

    it('Adds multiples nodes to tail properly', () => {
      emptyList.addToTail(10);
      emptyList.addToTail(20);
      emptyList.addToTail(30);

      const { head, tail } = emptyList;

      expect(head.previous).to.equal(null);
      expect(head.value).to.equal(10);
      expect(head.next.value).to.equal(20);

      expect(head.next.previous).to.equal(head);
      expect(head.next.value).to.equal(20);
      expect(head.next).to.equal(tail.previous);
      expect(tail.previous.value).to.equal(20);
      expect(tail.previous.next).to.equal(tail);

      expect(tail.previous.value).to.equal(20);
      expect(tail.value).to.equal(30);
      expect(tail.next).to.equal(null);
    });
  });

  describe('Remove Tail', () => {

    beforeEach(resetLists);

    it('Has removeTail method', () => {
      assert.isFunction(fullList.removeTail);
    });

    it('Returns the correct value', () => {
      expect(fullList.removeTail()).to.equal(30);
    });

    it('Removes tail node', () => {
      fullList.removeTail();

      expect(fullList.tail.value).to.equal(20);
    });

    it('New tail next value is NULL', () => {
      fullList.removeTail();

      expect(fullList.tail.next).to.equal(null);
    });

    it('Removes all nodes properly', () => {
      fullList.removeTail();
      fullList.removeTail();
      fullList.removeTail();

      expect(fullList.head).to.equal(null);
      expect(fullList.tail).to.equal(null);
    });
  });

  describe('Add To Head', () => {

    beforeEach(resetLists);

    it('Has addToHead method', () => {
      assert.isFunction(fullList.addToHead);
    });

    it('Adds a new head', () => {
      fullList.addToHead(-10);

      expect(fullList.head.value).to.equal(-10);
    });

    it('One node in list should be both head and tail', () => {
      emptyList.addToHead(10);

      expect(emptyList.head.value).to.equal(10);
      expect(emptyList.head).to.equal(emptyList.tail);
    });

    it('One node in list should have no next or previous', () => {
      emptyList.addToHead(10);

      expect(emptyList.head.previous).to.equal(null);
      expect(emptyList.head.next).to.equal(null);
      expect(emptyList.tail.previous).to.equal(null);
      expect(emptyList.tail.next).to.equal(null);
    });

    it('New head previous is NULL', () => {
      fullList.addToHead(-10);

      expect(fullList.head.value).to.equal(-10);
      expect(fullList.head.previous).to.equal(null);
    });

    it('New head next is old head', () => {
      const oldHead = fullList.head;
      fullList.addToHead(-10);

      expect(fullList.head.value).to.equal(-10);
      expect(fullList.head.next).to.equal(oldHead);
    });

    it('Old head previous is new head', () => {
      fullList.addToHead(-10);

      expect(fullList.head.value).to.equal(-10);
      expect(fullList.head.next.previous).to.equal(fullList.head);
    });

    it('Adds multiples nodes to head properly', () => {
      emptyList.addToHead(30);
      emptyList.addToHead(20);
      emptyList.addToHead(10);

      const { head, tail } = emptyList;

      expect(head.previous).to.equal(null);
      expect(head.value).to.equal(10);
      expect(head.next.value).to.equal(20);

      expect(head.next.previous).to.equal(head);
      expect(head.next.value).to.equal(20);
      expect(head.next).to.equal(tail.previous);
      expect(tail.previous.value).to.equal(20);
      expect(tail.previous.next).to.equal(tail);

      expect(tail.previous.value).to.equal(20);
      expect(tail.value).to.equal(30);
      expect(tail.next).to.equal(null);
    });
  });

  describe('Remove Head', () => {

    beforeEach(resetLists);

    it('Has removeHead method', () => {
      assert.isFunction(fullList.removeHead);
    });

    it('Returns the correct value', () => {
      expect(fullList.removeHead()).to.equal(10);
    });

    it('Removes head node', () => {
      fullList.removeHead();

      expect(fullList.head.value).to.equal(20);
    });

    it('New head previous value is NULL', () => {
      fullList.removeHead();

      expect(fullList.head.previous).to.equal(null);
    });

    it('Removes all nodes', () => {
      fullList.removeHead();
      fullList.removeHead();
      fullList.removeHead();

      expect(fullList.head).to.equal(null);
      expect(fullList.tail).to.equal(null);
    });
  });

  describe('Search', () => {

    beforeEach(resetLists);

    it('Has search', () => {
      assert.isFunction(fullList.search);
    });

    it('Returns the correct value', () => {
      const correctValue = 10;
      const incorrectValue = 'wrong';

      expect(fullList.search(correctValue)).to.equal(correctValue);
      expect(fullList.search(incorrectValue)).to.equal(null);
    });
  });
});
