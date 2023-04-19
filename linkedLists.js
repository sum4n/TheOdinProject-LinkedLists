const LinkedList = (nextAddress = null) => {
  let data = "head";
  return { data, nextAddress };
};

let list = LinkedList();

const Node = (data = null, nextAddress = null) => {
  return { data, nextAddress };
};

// adds new node containing value to the end of the list
function append(value) {
  if (value == null) return;

  let obj = Node(value);

  // if list is empty, add the object next to head.
  // else add the object at the end
  if (list.nextAddress == null) {
    list = LinkedList(obj);
  } else {
    let tmp = list.nextAddress;
    while (tmp.nextAddress != null) {
      tmp = tmp.nextAddress;
      // console.log(tmp, tmp.nextAddress);
    }
    tmp.nextAddress = obj;
  }
}

append("a");
append("b");
append("c");
append("d");
console.log("List after appending: ");
console.log(list);

// add new node containing value to the start of the list
function prepend(value) {
  if (value == null) return;

  let obj = Node(value);

  // if list is empty, just add the object to nextAddress
  // else change the object's pointer to old head node and
  // make it new head node.
  if (list.nextAddress == null) {
    list.nextAddress = obj;
  } else {
    obj.nextAddress = list.nextAddress;
    list.nextAddress = obj;
  }
}
console.log();
console.log("List after prepending: ");
prepend("e");
prepend("f");

console.log(list);

// return total number of nodes in the list
function size() {
  let count = 0;
  let tmp = list.nextAddress;
  while (tmp != null) {
    tmp = tmp.nextAddress;
    count += 1;
  }
  return `Total number of nodes in the list: ${count}`;
}
console.log();
console.log(size());

// return the first node of the list
function head() {
  return list.nextAddress;
}
console.log();
console.log("The first node in the list: ");
console.log(head());

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
console.log();
console.log("The last node in the list: ");
console.log(tail());

// return the node at given index
function at(index) {
  console.log();
  console.log(`Node at index ${index} is: `);
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

console.log(at(1));
