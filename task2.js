
let s =0;
function sum(arg) {

  if (typeof arg !== 'undefined') {
    s = s + arg;
    return sum;
  }
  else return s;
};


console.log(sum(2)(3)(-1)() )