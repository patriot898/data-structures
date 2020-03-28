

// Instantiate a new graph
var Graph = function() {
//create an array for all node values
//create an object for all edges
   this.nodes=[];
   this.edges={};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes.push(node);
  this.edges[node]=[];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return _.contains(this.nodes, node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {

  /*for(var i=0;i<this.nodes.length;i++){
    if(node===this.nodes){
      this.nodes(i,1);
    }
  }*/
  this.nodes.splice(this.nodes.indexOf(node), 1);
for(var key in this.edges){
  if(_.contains(this.edges[key], node)){
    this.edges[key].splice(this.edges[key].indexOf(node), 1);

  }
  //delete this.edges[node]
}


};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  //return (contains1 && contains 2 )
  return (_.contains(this.edges[fromNode],toNode) && _.contains(this.edges[toNode],fromNode));

};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  //push node1 into node2's array in the edge object
  //push node2 into node1's array in the edge object
    this.edges[fromNode].push(toNode);
    this.edges[toNode].push(fromNode);

};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  this.edges[fromNode].splice( this.edges[fromNode].indexOf(toNode),1);
  this.edges[toNode].splice( this.edges[toNode].indexOf(fromNode),1);
  //inputarray.splice(indexOfitem, 1)
  //inputarray.indexOf(itemToFind)
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
	for(var i=0;i<this.nodes.length;i++){
    cb(this.nodes[i]);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


