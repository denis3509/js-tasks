const runExecutorAfterTimeout = (executor,timeout)=> {
  return new Promise(resolve => {
    setTimeout(executor, timeout, resolve)
  })
};

const promises = [];
for ( let i =0;i <10; i++){
  let promise = runExecutorAfterTimeout((resolve)=>{
    console.log('executor '+ i, resolve);
    resolve(i);
  }, 1000*i)
  promises.push(promise);
}
Promise.all(promises)
.then(result=>{
  console.log(result)
})