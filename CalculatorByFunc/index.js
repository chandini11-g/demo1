// coded by pavan
function cal() {
   var res = 0;
   var resF = 1;
   for (var i = 1; i < arguments.length; i++) {
      if (arguments[0] === '+') res = res + arguments[i];
      if (arguments[0] === '-') res = -res - arguments[i];
      if (arguments[0] === '*') resF = resF * arguments[i];
   }
   if (arguments[0] === '/') resF = arguments[1] / arguments[2];
   if (arguments[0] === '/' || arguments[0] === '*') return resF;
   return res;
}
console.log(cal('+', 9, 4));
// first parameter should be an operator(+, -, *, /)
