//findIndex Definition
// Returns the index of the first element in the array for which the callback
//  returns a truthy value. -1 is returned if the callback never returns
//   a truthy value.

function findIndex(array, callback){
  //findIndex code to be implemented
}

function callback(curElement, curIndex, array){
  //callback implemented by caller of function
}

//findIndex Example: Find a number

var arr = [3,4,6,2,1];

function findIndex(arr, function(num, index, array){
  return num === 6;
});

console.log(findIndex(arr));//This will return 2 index for 6

var arr2= [5,11,13,8,6,7];

function findIndex(arr2, function(num, index, array){
  return num % 2 ===0;
});

console.log(findIndex(arr2)); //This should return 3 for the index because 8 mod 2 === 0

var langs = ["Java", "C++", "Python", "Ruby"];

findIndex(langs, function(lang, index, array){
  return lang === "Javascipt";
}); // This will return -1 because there is no truthy value.

var langs = ["Java", "Javascipt", "C++"];

findIndex(lang, function(lang, index, arr){
  lang === "Javascipt";
}); //This will return -1 because we're not returning anything :(


/* findIndex Exercise*/

function findIndex(arr, callback) {
    for (var i =0; i < arr.length; i++){
      if (callback(arr[i], i, arr)){
        return i;
      }
    }
      return -1;
}



// HINTS
  // the function should iterate through the array passed to it and invoke the callback function at each iteration
  // the callback function should accept three parameters - the value you are iterating over, the index you are currently at, and the entire array
  // if the callback returns true at any point, return the index at which you are iterating over
  // otherwise return -1
