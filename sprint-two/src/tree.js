var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
	var child = Tree(value);
	this.children.push(child);
};

treeMethods.contains = function(target) {
	//set currentBranch to either the input branch or this
	//check currentBranch's value to see if it matches target
	//if so, return true
	//if not, check if it has any children
	//if so, iterate through those children and conduct contains on them
	//return false after all iterations are complete
	
	
	var isFound = false;

	if(this.value === target) {
		isFound = true;
	}
	if(this.children.length) {
		for(var i = 0; i < this.children.length; i++) {
			isFound = isFound || this.children[i].contains(target);		}
	};

	return isFound;

	
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
