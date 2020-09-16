// addition

let add = function() {
  let arr = arguments;
  let tot = 0;
  for (let i = 0; i < arr.length; i++) {
    tot += arr[i];
  }
  console.log("addition:" + tot);
};
add(1, 2, 3, 4);

//subraction
let sub = function() {
  let arr1 = arguments;
  let i = 0;
  let tot = arr1[i];

  for (let i = 1; i < arr1.length; i++) {
    tot -= arr1[i];
  }
  console.log("subtraction:" + tot);
};
sub(2, 4, 3);

//multiplication

let mul = function() {
  let arr2 = arguments;
  let i = 0;
  let tot = arr2[i];
  for (let i = 1; i < arr2.length; i++) {
    tot *= arr2[i];
  }
  console.log("multiplication:" + tot);
};
mul(2, 3, 6);

//division
let div = function() {
  let arr3 = arguments;
  let i = 0;
  let tot = arr3[i];
  for (i = 1; i < arr3.length; i++) {
    tot /= arr3[i];
  }
  console.log("division:" + tot);
};
div(1, 2, 5);

// coded by pavan
function cal() {
  var res = arguments[1];
  for (var i = 1; i < arguments.length - 1; i++) {
    if (arguments[0] === "+") res += arguments[i + 1];
    if (arguments[0] === "-") res -= arguments[i + 1];
    if (arguments[0] === "*") res *= arguments[i + 1];
    if (arguments[0] === "/") res /= arguments[i + 1];
  }
  return res;
}
console.log(cal("/", 1, 2, 5));
// first parameter should be an operator(+, -, *, /)


