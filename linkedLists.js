const LinkedList = (nextAddress = null) => {
  // let nextAddress = null;
  // let list = { nextAddress };
  return { nextAddress };
};

let list = LinkedList();

console.log(list.nextAddress);

const Node = (data = null, nextAddress = null) => {
  return { data, nextAddress };
};

function append(value) {
  let obj = Node(value);

  if (list.nextAddress == null) {
    list = LinkedList(obj);
  } else {
    let tmp = list.nextAddress;
    console.log(tmp);
    console.log(tmp.nextAddress);
    while (tmp.nextAddress != null) {
      tmp = tmp.nextAddress;
    }
    tmp.nextAddress = obj;
    // console.log(tmp.nextAddress);
  }

  console.log(list);
}

append("a");
append("b");
append("c");
append("d");
