// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let counter = 0;
    let node = this.head;
    while (node) {
      counter++;
      node = node.next;
    }
    return counter;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if (!this.head) {
      return null;
    }
    let node = this.head;
    while (node.next !== null) {
      node = node.next;
    }
    return node;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) {
      return;
    }
    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) {
      return;
    }

    if (!this.head.next) {
      this.head = null;
      return;
    }
    let previous = this.head;
    let node = this.head.next;
    while (node.next) {
      previous = node;
      node = node.next;
    }
    previous.next = null;
  }

  insertLast(data) {
    const lastNode = this.getLast();
    if (lastNode) {
      lastNode.next = new Node(data);
    } else {
      this.head = new Node(data);
    }
  }
  getAt(n) {
    let counter = 0;
    let node = this.head;

    while (node) {
      if (counter === n) {
        return node;
      }
      counter++;
      node = node.next;
    }
    return null;
  }

  removeAt(n) {
    if (!this.head) {
      return;
    }

    if (n >= this.size()) {
      return;
    }

    const rNode = this.getAt(n);

    if (n === 0) {
      this.head = this.head.next;
      return;
    }

    const priorNode = this.getAt(n - 1);

    if (!rNode.next) {
      priorNode.next = null;
    } else {
      priorNode.next = rNode.next;
    }
  }

  insertAt(data, n) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }

    if (n === 0) {
      this.insertFirst(data);
      return;
    }

    if (n >= this.size()) {
      let node = this.getLast();
      node.next = new Node(data);
      return;
    }

    const prevNode = this.getAt(n - 1) || this.getLast();
    const node = new Node(data, prevNode.next);
    prevNode.next = node;
  }
}

module.exports = { Node, LinkedList };
