var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[someInstance.size()] = value;
  };

  someInstance.dequeue = function() {
    var dequeued = storage[0];
    for(var key in storage) {
      storage[key] = storage[(parseInt(key) + 1)];
    }
    //delete last key afterwards
    delete storage[someInstance.size() - 1];
    return dequeued;
  };

  someInstance.size = function() {
    var sizeCount = 0;
    for(var key in storage) {
      sizeCount++;
    }
    return sizeCount;
  };

  return someInstance;
};
