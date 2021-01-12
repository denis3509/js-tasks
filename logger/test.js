const log  = require('./index');
try {
  const logger = log.createLogger(log.types.delimiterFileLogger,
    {
      delimiter: '\t',
      fileName: 'log.csv',
      dirName: 'email_logs',
      fields: ['email', 'date'],
      fileMode : 'replace'

    })
  for (let i=0;i< 1;i++)
  logger.addNewRecordFromArray([1,2])

} catch (e) {
  console.log(e)
}