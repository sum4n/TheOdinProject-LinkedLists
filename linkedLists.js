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

  return { linkedList, append, prepend };
};

let list = LinkedList();
list.append("a");
list.append("b");
list.append("c");
console.log(list.linkedList);
console.log();
list.prepend("z");
console.log(list.linkedList);

// return total number of nodes in the list
function size() {
  let count = 0;
  let tmp = list.nextAddress;
  while (tmp != null) {
    tmp = tmp.nextAddress;
    count += 1;
  }
  return count;
}
// console.log();
// console.log(`Total number of nodes in the list is: ${size()}`);

// return the first node of the list
function head() {
  return list.nextAddress;
}
// console.log();
// console.log("The first node in the list: ");
// console.log(head());

// return the last node of the list
function tail() {
  let tmp = list.nextAddress;
  while (tmp != null) {
    if (tmp.nextAddress == null) {
      break;
    } else {
      tmp = tmp.nextAddress;
    }
  }
  return tmp;
}
// console.log();
// console.log("The last node in the list: ");
// console.log(tail());

// return the node at given index
function at(index) {
  let count = 0;
  let tmp = list.nextAddress;
  while (tmp != null) {
    if (count == index) {
      return tmp;
    } else {
      tmp = tmp.nextAddress;
      count++;
    }
  }
}
// console.log();
// console.log(`Node at specified index is: `);
// console.log(at(1));

// remove the last node from the list
function pop() {
  // get the second last node and set its nextAddress to null.
  let secondLastNodeIndex = size() - 2;
  let secondLastNode = at(secondLastNodeIndex);
  console.log();
  console.log("Poped node:");
  console.log(secondLastNode.nextAddress);
  secondLastNode.nextAddress = null;
}

// pop();
// console.log("New list: ");
// console.log(list);

// returns true if value is in list, otherwise returns false
function contains(value) {
  let tmp = list.nextAddress;
  if (tmp.data == value) return true;
  while (tmp.data != value) {
    tmp = tmp.nextAddress;
    if (tmp == null) return false;
    if (tmp.data == value) return true;
  }
}

// console.log();
// console.log(`List contains value 'e': ${contains("e")}`);
// console.log(`List contains value 'x': ${contains("x")}`);

// return index of node if found or return null
function find(value) {
  let index = 0;
  let tmp = list.nextAddress;
  if (list.nextAddress.data == value) return index;

  while (tmp.data != value) {
    tmp = tmp.nextAddress;
    index++;
    if (tmp == null) return null;
    if (tmp.data == value) return index;
  }
}
// console.log(`Index of value 'a': ${find("a")}`);

// represent Linked List objects as strings, and print.
function toString() {
  let tmp = list.nextAddress;
  let outputList = "";
  while (tmp != null) {
    // console.log(tmp.data);
    outputList += `( ${tmp.data} )` + " -> ";
    tmp = tmp.nextAddress;
  }
  // console.log(tmp);
  outputList += tmp;
  // console.log(outputList);
  return outputList;
}

// console.log(`Preview linked list objects: ${toString()}`);

// inserts new node with provided value at given index
function insertAt(value, index) {
  let lastIndex = size();
  if (index > lastIndex || index < 0) {
    return `Index should be within 0-${size()}`;
  }
  if (index == size()) {
    append(value);
    // return;
  } else if (index == 0) {
    // let firstNode = at(index);
    // console.log(firstNode);
    // let newNode = Node(value, firstNode);
    // list.nextAddress = newNode;
    prepend(value);
    // return;
  } else {
    let tmpNode2 = at(index);
    // console.log(tmpNode2.nextAddress);
    let tmpNode1 = at(index - 1);
    // console.log(tmpNode1);
    let newNode = Node(value, tmpNode2);

    tmpNode1.nextAddress = newNode;
  }
  console.log(`Inserter node with value "${value}" to index ${index}`);
}

// console.log();
// insertAt("new", 5);
// console.log(`Preview linked list objects: ${toString()}`);
// insertAt("new2", 2);
// console.log(`Preview linked list objects: ${toString()}`);

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
