/** A representation of class names as an ordered map of values. */
export class ClassList {
  private items: string[] = [];
  constructor(initial?: string) {
    if (initial !== undefined) {
      this.items = initial.split(" ");
    }
  }
  /**
   * Adds a new class name to the list.
   * If the class name already exists then nothing happens.
   * @param className The class name to add.
   */
  add(className: string): ClassList {
    if (!this.items.includes(className)) {
      this.items.push(className);
    }
    return this;
  }
  /**
   * Adds a list of class names to the list.
   * @param classNames The class names to add, separated by whitespace.
   */
  extend(classNames: string): ClassList {
    classNames.split(/s/g).forEach((className) => {
      this.add(className);
    });
    return this;
  }
  /**
   * Removes a class name from the list.
   * If the class name is not in the list then nothing happens.
   * @param className The class name to remove.
   */
  remove(className: string): ClassList {
    this.items = this.items.filter((item) => item != className);
    return this;
  }
  /**
   * Returns true if a class name is in the list.
   * @param className The class name to check.
   */
  has(className: string): boolean {
    return this.items.includes(className);
  }
  /**
   * Returns a concatenated string with every class name in the list,
   * in the order in which they were added.
   */
  toString(): string {
    return this.items.join(" ");
  }
}
