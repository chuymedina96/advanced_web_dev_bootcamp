function callback(){
  console.log("Hello from callback");
}

function higherOrder(fn){
  console.log("About to call... back. hah get it?");
  fn();
  console.log("The callback function was just invoked");
}
console.log(higherOrder(callback));
