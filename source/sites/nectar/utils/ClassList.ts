interface ClassData {
  position?: string;
  display?: string;
  size?: string;
  padding?: string;
  margin?: string;
  text?: string;
  color?: string;
  background?: string;
  border?: string;
  animation?: string;
  misc?: string;
}

type ClassInput = ClassData | string;

function concatenateData(data: ClassData): string {
  return Object.values(data).reduce((acc, item) => {
    return `${acc} ${item}`;
  }, '');
}

/** A representation of class names as an ordered map of values. */
export class ClassList {
  private items: string[] = [];
  constructor(data?: ClassInput) {
    switch (typeof data) {
      case 'undefined': {
        return;
      }
      case 'string': {
        this.items = data.split(' ');
        break;
      }
      default: {
        // Usage
        const dataStr: string = concatenateData(data);
        this.items = dataStr.trim().split(' ');
      }
    }
  }
  /**
   * Adds a new class name to the list.
   * If the class name already exists then nothing happens.
   * @param className The class name to add.
   */
  add(className: string | ClassData): ClassList {
    if (typeof className === 'string') {
      if (!this.items.includes(className)) {
        this.items.push(className);
      }
      return this;
    }

    return this;
  }
  /**
   * Adds a list of class names to the list.
   * @param classNames The class names to add, separated by whitespace.
   */
  extend(classNames: string): ClassList {
    for (const className of classNames.split(' ')) {
      this.add(className);
    }
    return this;
  }
  /**
   * Removes a class name from the list.
   * If the class name is not in the list then nothing happens.
   * @param className The class name to remove.
   */
  remove(className: string): ClassList {
    this.items = this.items.filter((item) => item !== className);
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
  get css(): string {
    return this.items.join(' ');
  }
}
