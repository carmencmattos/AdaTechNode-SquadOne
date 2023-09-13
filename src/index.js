const express = require('express');
const bodyParser = require('body-parser');

const port = 3005;
const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
  // GET soma
  res.status(200).json({ mensagem: 'Hello World' });
});

let resultado = 0;

app.get('/resultado', (req, res) => {
  // GET soma

  res.status(200).json({ resultado });
});

app.post('/somar', (req, res) => {
  // POST somar
  const { num_1, num_2 } = req.body;

  resultado = num_1 + num_2;

  res.status(201).json({ resultado });
});

app.post('/subtrair', (req, res) => {
  // Post Subtrair
  const { num_1, num_2 } = req.body;

  resultado = num_1 - num_2;

  res.status(201).json({ resultado });
});

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
