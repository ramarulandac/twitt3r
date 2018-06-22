let express = require('express')
let app = express()
const PORT = 3000

app.get('/',(req, res) => {
  res.send('Hello cat!')
})

app.listen(PORT, (err) => {
  if (err) {
    console.log(`Error ${err}`)
    process.exit(1)
  }
  console.log(`server listening on port ${PORT} ..`)
})
