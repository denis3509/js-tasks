const {query} = require('./db')


;(async ()=>{
  try {
    const response = await query('select email from emailsrew');
    console.log(response)
  } catch (e) {
    console.log(e)
  }

})()