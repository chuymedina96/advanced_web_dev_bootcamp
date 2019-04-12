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
