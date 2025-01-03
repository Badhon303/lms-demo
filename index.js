const express = require("express")

const app = express()

// Serve the index.html file from the public folder

app.use(express.static("public"))

app.listen(3001, () => {
  console.log("Server listening on port 3000")
})
