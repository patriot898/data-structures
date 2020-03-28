var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = []; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  //check if this._storage contains item
  //if so, don't add
  //if not, push into storage
   if( !_.contains(this._storage, item)){
     this._storage.push(item);
   }


};

setPrototype.contains = function(item) {
   return _.contains(this._storage, item);

};

setPrototype.remove = function(item) {
  if( _.contains(this._storage, item)){
    this._storage.splice(this._storage.indexOf(item),1);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


 //set = {_storage: null};