const express = require('express');
const cors=  require('cors');
const app = express();

app.use(cors())

app.get('/', (req, res) => {
  const data = {
    mensagem: 'Feliz dias dos namorados!',
    de: 'Aluno 1',
    para: 'Aluno 2',
    botaoDinamico: "oi eu sou um botao dinamico"
  };
  
  res.json(data);
});

app.get('/node', (req, res) => {
    const data = {
      mensagem: 'node rodando!',
      de: 'teste1',
      para: 'teste2'
    };
    
    res.json(data);
  });

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
