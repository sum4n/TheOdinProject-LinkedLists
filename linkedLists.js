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

prepend("e");
prepend("f");

console.log(list);
