/*
  Objectives

    - Define a promise
    - Add .then callback to a promise
    - Add a .catch callback to a promise
    - Wrap a setTimeout call in a promise
*/
/*
  Promise: Conceptually

    - A promise is an object that represents a task that
      will be completed in the future.

    Analogy: Taking an number at a government office before
      you can get helped. The piece of paper you
      get is like your promise. The Help you get at the counter
      is like the invocation of your callback.

*/

//Creating a promise

var p1 = new Promise(function(resolve, reject){
  resolve([1,2,3,4]);
});

p1.then(function(arr){
  console.log("Promise p1 resolved with data: ", arr);
});

var p1= new Promise(function(resolve, reject){
  reject("Error");
});

p1.then(function(data){
  console.log("Promise p1 resolved with data:", data);
}).catch(function(data){
  console.log("Promise p1 was rejected with data:", data);
});

//Promise - with Randomly Ocurring error

var p1 = new Promise(function(resolve, reject){
  var num = Math.random();
  if(num < 0.5){
    resolve(num);
  }else{
    reject(num);
  }
});

p1.then(function(result){
  console.log("Success:", result);
}).catch(function(error){
  console.log("Error:", error);
});

var promise = new Promise(function(resolve, reject){
  setTimeout(function(){
    var randomInt = Math.floor(Math.random() * 10);
    resolve(randomInt);
  }, 4000);
});

promise.then(function(data){
  console.log("Random int passed to resolve:", data);
});
