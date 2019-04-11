/*
  Describe what the stack this
  Describe a stack frame
  Describe the heap

  What is the stack?
    - An ordered data structure
    - Keeps track of function invocations
    - Part of the JS runtime(you dont access it directly

  How your code changes the stack

  -  Whenever you invoke a function, the details of the invocation are saved
      to the top of the stack(pushed to the top)
  - Whenever a function returns, the information about the invocation is
      taken off the top of the stack(popped off of the top)
  }

  Stack frames
    - they keep track of important info such as info pertaining to the
        function being invoked.


  Stack Definition

    - An ordered set of stack frames
    - Most recently invoked function is on the top of the Stack
    - The bottom of the stack is the first function invoked
    - The stack is processed from top to bottom.

Heap Defintion

  - An area in memory where the data is stored.

*/

function multiply(x, y){
  return x * y;
}

var res = multiply(3,5); //This is being invoked. Placed on stack

//Heap example below. Data is stored in obj.
var obj = {firstname: "Tim",
          lastName: "Garcia"};

//New Data is not created below, only a copy of the reference
var referenceCopy = obj;

//STACK EXAMPLE

function upperCaseFirst(word) {
  return word[0].toUpperCase() + word.slice(1);
}

function upperCaseWords(sentence) {
  var words = sentence.split(" ");
  for(var i =0; i < words.length; i++){
    words[i] = upperCaseFirst(words[i]);
  }
  return words.join(" ");
}

upperCaseWords("lowercase words");

/*

*/
