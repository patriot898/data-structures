var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance['storage'] = {};
  return someInstance;
};

var queueMethods = {enqueue : function(value) {
    this.storage[this.size()] = value;
  },
  dequeue : function() {
    var dequeued = this.storage[0];
    for(var key in this.storage) {
      this.storage[key] = this.storage[parseInt(key) + 1];
    }
    delete this.storage[this.size() - 1];
    return dequeued;
  },
  size : function() {
    var sizeCounter = 0;
    for(var key in this.storage) {
      sizeCounter ++;
    }
    return sizeCounter;
  }
};


