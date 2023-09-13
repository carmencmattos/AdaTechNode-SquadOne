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

app.post('/multiplicar', (req, res) => {
  //Post multiplicar
  const { num_1, num_2} = req.body;

  resultado = num_1 * num_2; 
  res.status(201).json({ resultado });

});

app.post('/dividir', (req,res) => {
  //Post Dividir
  const {num_1,num_2} = req.body;

  resultado = num_1 / num_2;
  res.status(201).json({ resultado });

})

app.post('/modular', (req, res) => {
  //Post resto da divisão
  const {num_1, num_2} = req.body;

  resultado = num_1 % num_2;
  res.status(201).json({ resultado });
})

app.post('/exponenciar', (req, res) => {
  // POST Exponenciar
  const {num_1, num_2} = req.body;

  resultado = num_1 ** num_2;
  res.status(201).json({ resultado });
})

app.post('/raiz-quadrada', (req, res) => {
  //POST Raiz Quadrada
  const {num_1} = req.body;

  resultado = Math.sqrt(num_1);
  res.status(201).json({resultado});
  
})

app.post('/raiz-cubica', (req, res) => {
  //POST Raiz Cúbica
  const {num_1} = req.body;

  resultado = Math.cbrt(num_1);
  res.status(201).json({resultado});
  
})

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});

