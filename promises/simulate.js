const query = (count, tag, timeout) => {
  return new Promise(resolve => {
      const array = [];
      for (let i = 0; i < count; i++) {
        array.push(i)
      }
       setTimeout(()=>{
         resolve({
           array,
           tag
         })
       },timeout)
    }
  )
}

module.exports = {
  query
}