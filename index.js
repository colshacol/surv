const app = require('express')()
const config = require('./surv.json')
const files = config.files
const port = config.port

console.log('\nsurv REGISTERING ROUTES TO FILES:\n')
Object.keys(files).map(file => {
  const route = file
  const filePath = files[file]

  console.log(route, ' associated with ', filePath)
  console.log(`Use http://localhost:${port}${route} for access.\n`)

  app.get(route, (req, res) => {
    res.sendFile(filePath)
  })
})

app.listen(port, () => {
  console.log(`LIVE: http://localhost:${port}\n`)
})
