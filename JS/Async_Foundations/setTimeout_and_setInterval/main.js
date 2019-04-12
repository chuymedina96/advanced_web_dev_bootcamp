/*
  Objectives
    - write asynchronous code using setTimeout
    - Write asynchronous code using setInterval

    setTimeout
      - A function that asynchronously invokes a callback after a delay in milliseconds

    setInterval
      - A function that continually invokes a callback after every X milliseconds,
        where X provided to setInterval.
*/

// setTimeout usage
/*
function callback(){
  console.log("callback function");
}
var delay = 1000; //Delayt is in ms

setTimeout(callback, delay);

setTimeout(function(){
  console.log("Run in aprrox. 2000ms");
}, 2000);


var timerId = setTimeout(function(){
  console.log("This function runs in 30 seconds");
}, 30000);

setTimeout(function(){
  console.log("I am canceling the first setTimeout", timerId);
  clearTimeout(timerId);
}, 2000)


function callback(){
  console.log("callback is called continuously");
}
var repeat = 3000;

setInterval(callback, repeat); //repeat it the interval in ms.

//setInterval Example

var num = 0;
var int = 1000;
setInterval(function(){
  num++;
  console.log("num:", num);
}, int);


//Cancelling setInterval
var num = 0;
var intervalId = setInterval(function(){
  num++;
  console.log("num:", num);
  if(num === 3){
    clearInterval(intervalId);
  }
}, 1000);
*/


/*Your goal is to implement a function called countDown.
The function will accept 1 parameter which is a time in seconds
for the count down.  The function should console.log the time
remaining every second.
Once the timer gets to 0, the timer should be stopped and you should
console.log "Ring Ring Ring!!!".

HINT: You will need to use setInterval() to count down and clearInterval to stop the timer.

Example:

countDown(3)

Console output

    Timer: 2
    Timer: 1
    Ring Ring Ring!!!
    */


var num = 11;

var myInterval = 1000;

var countDown = setInterval(function(seconds){
  num--;
  console.log("num:", num);
  if(num === 0){
    console.log("Ring ring ring!!!");
    clearInterval(countDown);
  }
}, myInterval);
