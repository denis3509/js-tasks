let arrayOfPromises = [];

let max = 500_000;

for (let i = 0; i < max; i++) {
  arrayOfPromises.push(  Promise.resolve(3))
}

Promise.allSettled(arrayOfPromises)
.then(result=>{
  console.log(result.length);
})