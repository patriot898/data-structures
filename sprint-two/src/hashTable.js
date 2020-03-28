var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  //creates an index for our storage location by passing it through hashing function

  /*
    a =this._storage.get(index)
  a=a.append([k, v])
  this._storage.set(index,a)
  this._storage[index] = [k, v] */

  /*
  value=[key,value]

  limited Array{
      0:[[k,v], [] ]
           0     1
  }

  */

 // check if any value is present for the given index
 //if no value is present , then create a tuple and push key value inside it
 //call this._storage.set(index,tuple)

//debugger;

 var index = getIndexBelowMaxForKey(k, this._limit);
 var bucket=this._storage.get(index);
 var tuple=[k,v];
   if(!bucket){
    this._storage.set(index,[tuple]);
   }else{
     var isPresent = false;
     for(var i=0;i<bucket.length;i++){
        if(bucket[i][0] === k) {
          bucket[i][1] = v;
          isPresent = true;
        }
       }
       if(!isPresent) {
         bucket.push(tuple);
       }

   }


};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);  //get the index
  //get the bucket at the given index
  //iterate through all the nested tuples in the bucket to see if the search value k is equal to any of the keys
  //if so, return the associated value
  var bucket = this._storage.get(index);
  if(bucket) {
    for(var i = 0; i < bucket.length; i++) {
      if(bucket[i][0] === k) {
        return bucket[i][1];
      }
    }
  }


};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if(bucket){
    for(var i = 0; i < bucket.length; i++) {
      if(bucket[i][0] === k) {
        bucket.splice(i, 1);
      }
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


