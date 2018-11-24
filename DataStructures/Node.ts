export class Node {
  public previous: any;
  public next: any;
  public value: any;

  constructor (val: any = null) {
    this.previous = null;
    this.next = null;
    this.value = val;
  }
}
