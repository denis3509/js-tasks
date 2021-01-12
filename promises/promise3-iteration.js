const {query} = require('./simulate');


;(async () => {
  for (let i =0 ;i<10;i++){
    console.log(i)
    const response=  await query(5, i, 0);
    let promises = [];
    response.array.forEach(item=>{
      promises.push(query(0, 'from ' + i, 5))
    })
    const result = await Promise.allSettled(promises);
    result.forEach(item=>{
      console.log('result item ' ,item)
    })
  }
})()