var BinarySearchTree = function(value) {
  var obj = {};
  obj.value = value;
  _.extend(obj, binarySearchMethods);
  return obj;

};


var binarySearchMethods = {

insert : function(value) {
  var child = new BinarySearchTree(value);
  if(value < this.value) {
    if(this.left === undefined) {
      this.left = child;
    } else {
      this.left.insert(value);
    }
  }

  if(value > this.value) {
    if(this.right === undefined) {
      this.right = child;
    } else {
      this.right.insert(value);
    }
  }


},

contains : function(target) {

  var isFound = false;

	if(this.value === target) {
		isFound = true;
	}
	else if(this.left || this.right) {
    if(this.value > target) {
      isFound = isFound || this.left.contains(target);
    } else {
      isFound = isFound || this.right.contains(target);
    }
	};

	return isFound;

},

depthFirstLog : function(cb) {
  cb(this.value);
  if(this.left) {
    this.left.depthFirstLog(cb);
  }
  if(this.right) {
    this.right.depthFirstLog(cb);
  }


}

};
/*
 * Complexity: What is the time complexity of the above functions?
 */
