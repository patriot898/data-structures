class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    //this.enqueue = enqueue;
    //this.dequeue = dequeue;
    //this.size = size;
  }
  enqueue(value) {
    this.storage[this.size()] = value;
  };

  dequeue() {
    var dequeued = this.storage[0];
    for(var key in this.storage) {
      this.storage[key] = this.storage[parseInt(key) + 1];
    }
    delete this.storage[this.size() - 1];
    return dequeued;
  };

  size() {
    var sizeCounter = 0;
    for(var key in this.storage) {
      sizeCounter++
    }
    return sizeCounter;
  };

}


  /*var enqueue = function(value) {
      this.storage[this.size()] = value;
    };

  var dequeue = function() {
      var dequeued = this.storage[0];
      for(var key in this.storage) {
        this.storage[key] = this.storage[parseInt(key) + 1];
      }
      delete this.storage[this.size() - 1];
      return dequeued;
    };

  var size = function() {
      var sizeCounter = 0;
      for(var key in this.storage) {
        sizeCounter++
      }
      return sizeCounter;
    };*/
