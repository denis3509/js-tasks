function makeDroids() {

  var droids = [];

  /* test */
  for (let i = 0; i < 10; i++) {
    var droid = function() {
      console.log("R2D" + i);
    };
    droids.push(droid);
  }
  /* test */

  return droids;
}

for (let d of makeDroids()) {
  d();
}

fetch('google.com')
.then(console.log)