const promise1 = (flag) => new Promise((resolve, reject) => {
  if (flag) resolve('without Promise.resolve');
  else reject('without Promise.resolve');
});
const promise2 = (flag) => new Promise((resolve, reject) => {
  if (flag) resolve('  Promise.resolve');
  else reject('  Promise.resolve');
});
console.log('21',  promise2(0).catch(r=>{throw  {r}}));
console.log('11', promise1(1));
//console.log('10', promise1(0));

 //console.log('20', Promise.resolve(promise2(0)));
