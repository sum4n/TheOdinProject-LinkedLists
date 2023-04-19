const LinkedList = (nextAddress = null) => {
  let data = "head";
  return { data, nextAddress };
};

let list = LinkedList();

const Node = (data = null, nextAddress = null) => {
  return { data, nextAddress };
};

// adds new node containing value at the end of the list
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
