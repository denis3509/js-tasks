function parallel(funcArray, doneAll) {
  const resArray = [];
  let rest = funcArray.length;

  const done = (index) => (string) => {
    resArray[index] = string;
    rest--;
    if (rest===0){
      doneAll(resArray)
    }
  }
  funcArray.forEach((f , index)=> {
    f(done(index))
  })
}

let a = function (done) {
  setTimeout(function () {
    done('result a');
  }, 300);
};

let b = function (done) {
  setTimeout(function () {
    done('result b');
  }, 200);
};

parallel([a, b], function (results) {
  console.log(results); // ['result a', 'result b']
});