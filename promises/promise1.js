let array = [];
for (let i = 0; i < 5; i++) {
  let promise = new Promise((resolve, reject) => {

    resolve(3)
  })
    .then(value => {
      return 'level2'
    })
    .then(result => {
      if (i % 2 === 0)
        return 'level3'
      else
        throw new Error('thrown')
    })
    .catch(error => {
      console.log('error catched in top')
      //return 'promise was rejected on level 3'
    })

  array.push(promise)
}

Promise.allSettled(array)
  .then(result => {
    console.log(result);

  })