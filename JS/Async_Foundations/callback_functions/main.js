//A higher order function is a function that accepts a callback as a parameter()

function callback(){
  console.log("Hello from callback");
}

function higherOrder(fn){
  console.log("About to call... back. hah get it?");
  fn();
  console.log("The callback function was just invoked");
}

console.log(higherOrder(callback));


function sendMessageConsole(message){
  console.log(message);
}

function sendMessageAlert(message){
  alert(message);
}

function sendMessageConfirm(message) {
  return confirm(message);
}
sendMessageAlert("Lots of duplication");

function sendMessage(message, callback){
  return callback(message);
}

sendMessage("Message for Console", console.log);
sendMessage("Message for alert", alert);
var answer = sendMessage("Are you sure??", confirm);


//Callbacks with Anonymous Functions
function greet(name, formatter){
  return "Hello, " + formatter(name);
}
greet("Tim", function(name){ //the formatter itself is a anonymous function
  return name.toUpperCase();
});
greet("Tim", function(name){
  return name + "!!!!!";
})

//Basics of callbacks
