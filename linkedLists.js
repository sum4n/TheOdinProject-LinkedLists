const Node = (data = null, next = null) => {
  return { data, next };
};

const LinkedList = (next = null) => {
  let data = "head";

  let linkedList = { data, next };

  // add new node containing value to the end of the list
  const append = (value) => {
    if (value == null) return;

    let obj = Node(value);

    if (linkedList.next == null) {
      linkedList.next = obj;
    } else {
      let tmp = linkedList.next;
      while (tmp.next != null) {
        tmp = tmp.next;
      }
      tmp.next = obj;
    }
  };

  // add new node containing value to the start of the list
  const prepend = (value) => {
    if (value == null) return;

    let obj = Node(value);

    if (linkedList.next == null) {
      linkedList.next = obj;
    } else {
      obj.next = linkedList.next;
      linkedList.next = obj;
    }
  };

  // return total number of nodes in the list
  const size = () => {
    let count = 0;
    let tmp = linkedList.next;
    while (tmp != null) {
      tmp = tmp.next;
      count++;
    }
    return count;
  };

  // return the first node of the list
  const head = () => {
    return linkedList.next;
  };

  // return the last node of the list
  const tail = () => {
    let tmp = linkedList.next;
    while (tmp != null) {
      if (tmp.next == null) break;
      tmp = tmp.next;
    }
    return tmp;
  };

  // return node at given index
  const at = (index) => {
    let count = 0;
    let tmp = linkedList.next;
    while (tmp != null) {
      if (count == index) {
        return tmp;
      } else {
        tmp = tmp.next;
        count++;
      }
    }
  };

  // remove last node from the list
  const pop = () => {
    // get the second last node and set its next to null
    let secondLastNodeIndex = size() - 2;
    let secondLastNode = at(secondLastNodeIndex);
    secondLastNode.next = null;
  };

  // returns true if value is in the list otherwise returns false
  const contains = (value) => {
    let tmp = linkedList.next;
    if (tmp.data == value) return true;
    while (tmp.data != value) {
      tmp = tmp.next;
      if (tmp == null) return false;
      if (tmp.data == value) return true;
    }
  };

  // returns index of node if found or null
  const find = (value) => {
    let index = 0;
    let tmp = linkedList.next;
    if (linkedList.next.data == value) return index;

    while (tmp.data != value) {
      tmp = tmp.next;
      index++;
      if (tmp == null) return null;
      if (tmp.data == value) return index;
    }
  };

  // represent linked list objects as string and print
  const toString = () => {
    let tmp = linkedList.next;
    let outputList = "";
    while (tmp != null) {
      // console.log(tmp.data);
      outputList += `( ${tmp.data} )` + " -> ";
      tmp = tmp.next;
    }
    // console.log(tmp);
    outputList += tmp;
    // console.log(outputList);
    return outputList;
  };

  // inserts new node with provided value at given index
  const insertAt = (value, index) => {
    let lastIndex = size();
    if (index > lastIndex || index < 0) {
      console.log(`Index should be within 0-${size()}`);
      return;
    }
    if (index == size()) {
      append(value);
    } else if (index == 0) {
      prepend(value);
    } else {
      let tmpNode2 = at(index);
      let tmpNode1 = at(index - 1);
      let newNode = Node(value, tmpNode2);

      tmpNode1.next = newNode;
    }
    console.log(`Insert node with value "${value}" to index ${index}`);
  };

  return {
    linkedList,
    append,
    prepend,
    size,
    head,
    tail,
    at,
    pop,
    contains,
    find,
    toString,
    insertAt,
  };
};

let list = LinkedList();
list.append("a");
list.append("b");
list.append("c");
console.log(list.linkedList);
console.log();
list.prepend("z");
console.log(list.linkedList);
console.log(`Number of nodes in the list: ${list.size()}`);
console.log("First node: ");
console.log(list.head());
console.log("Last node:");
console.log(list.tail());
console.log("Node at given index: ");
console.log(list.at(2));
console.log("Last node poped");
list.pop();
console.log(list.linkedList);
console.log(list.contains("a"));
console.log(list.contains("aa"));
console.log(`Index of value 'b': ${list.find("b")}`);
console.log(list.toString());
list.insertAt("new", 3);
console.log(list.toString());
list.insertAt("new2", 0);
console.log(list.toString());

// removes node at given index;
function removeAt(index) {
  let highestIndex = size() - 1;
  if (index < 0 || index > highestIndex) {
    console.log(`Index should be between 0 and ${highestIndex}`);
    return;
  }

  let thisNode = at(index);
  console.log(`Node to remove (${thisNode.data})`);

  if (index == highestIndex) {
    pop();
    return;
  }

  let nextNode = at(index + 1);
  // console.log(nextNode.data);

  thisNode.data = nextNode.data;
  thisNode.nextAddress = nextNode.nextAddress;
}

// console.log();
// removeAt(1);
// console.log(toString());
