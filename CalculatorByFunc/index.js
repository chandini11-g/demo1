// coded by pavan
function cal() {
   var res = arguments[1];
   for (var i = 1; i < arguments.length - 1; i++) {
      if (arguments[0] === '+') res += arguments[i + 1];
      if (arguments[0] === '-') res -= arguments[i + 1];
      if (arguments[0] === '*') res *= arguments[i + 1];
      if (arguments[0] === '/') res /= arguments[i + 1];
   }
   return res;
}
console.log(cal('/', 1, 2, 5));
// first parameter should be an operator(+, -, *, /)
