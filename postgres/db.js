const {Pool} = require('pg')
const pool = new Pool({
  password: '2589654',
  database : 'emails'
})
module.exports = {
  async query(text, params) {
    const start = Date.now()
    const res = await pool.query(text, params)
    const duration = Date.now() - start
    console.log('executed query', {text, duration, rows: res.rowCount})
    return res
  },
}
