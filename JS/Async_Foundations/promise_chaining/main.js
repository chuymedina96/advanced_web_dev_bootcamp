/*
  Objectives

    - Describe the disadvantages of using nested callbacks
    - Return a promise from a .then callback function
    - use a promise to make asynchronous code seem sequential


*/
//Nested Async callbacks
var counter = 0;

setTimeout(function(){
  counter++;
  console.log("Counter:", counter);
  setTimeout(function(){
    counter++;
    console.log("Counter:", counter);
    setTimeout(function(){
      counter++;
      console.log("Counter:", counter);
    }), 3000);
  }), 2000);
}), 1000);


var counter 0;

function incCounter(){
  counter++;
  console.log("Counter:", counter);
}

//Code abover is hard to read expecially when the code gets longer.
// Logic is hard to reason with.

var promise = new Promise(function(resolve, reject){
  setTimeout(function(){
    randomInt = Math.floor(Math.random()*10);
    resolve(randomInt);
  }, 3000);
});

promise.then(function(data){
  console.log("Random integer passed to resolve:", data);
  return new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve(Math.floor(Math.random()*10))
    }, 500);
  });
}).then(function(data){
  console.log("random int that was resolved is:", data);
});

//Promise chaining: returning Data.

var promise = new Promise(function(resolve, reject){
  resolve(5);
});

promise.then(function(data){
  return data * 2;
}).then(function(data){
  return data + 20;
}).then(function(data){
  console.log(data);
});
