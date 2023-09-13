const express = require("express")
const bodyParser = require("body-parser")

const port = 3005
const app = express()

app.use(bodyParser.json())

app.get("/", (req, res) => { // GET soma
  res.status(200).json({mensagem: "Hello World"})
})

let soma = 0

app.get("/somar", (req, res) => { // GET soma

  res.status(200).json({soma})
})

app.post("/somar", (req, res) => { // POST somar
  const { num_1, num_2 } = req.body;

  soma = num_1 + num_2

  res.status(201).json({soma})
})

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`)
})