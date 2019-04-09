var arr = [1,2,3,4,5,6];

function double(arr){
  for(var i = 0; i < arr.length; i++){
    console.log(arr[i] * 2);
  }
}
double(arr);

//ForEach writes the For Loop for us
forEach(arr, function(number){
  console.log(number * 2);
})

//forEach Function Definition
function forEach(array, callback){ //accepts an a array and a callback
  //to be implemented
}
//Callback signature
function callback(curElement, currentIndex, array){ //SO DOPE!! This is the arch of forEach
  // implemented by the caller of forEach
}

var strings = ["my", "foreach", "example"];

var result = '';

forEach(strings, function(str, index, array){
  if(array.length -1 !== index){
    result += str + " ";
  }else{
    result += str + "!!!";
  }
});
