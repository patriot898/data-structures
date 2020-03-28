var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
     var newNode= Node(value);

     if(list.head === null) {
     list.head = newNode;
     list.tail = newNode;
     } else {
      list.tail.next=newNode;
      list.tail=newNode;
     }

  };

  list.removeHead = function() {
    var oldHead = list.head.value;
    list.head = list.head.next;
    return oldHead;
  };

  list.contains = function(target) {
    var currentObj = list.head
     while(currentObj.next !== null) {
      if(currentObj.value === target) {
       return true;
       }
      currentObj = currentObj.next;
       }
    if(currentObj.value === target) {
      return true;
    }
     return false;
    };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
