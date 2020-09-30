const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hi there welcome to my assignment');
});

app.get('/speak/:name', (req, res) => {
  const name = req.params.name;
  if (name === 'pig') {
    console.log(`The ${name} says Oink`);
    res.send(`The ${name} says Oink`);
  }
  if (name === 'dog') {
    console.log(`The ${name} says Woof Woof`);
    res.send(`The ${name} says Woof Woof`);
  }
  if (name === 'cow') {
    console.log(`The ${name} says Moo`);
    res.send(`The ${name} says Moo`);
  }
});

app.get('/repeat/:greet/:num', (req, res) => {
  let count = Number(req.params.num);
  let greeting = req.params.greet.toLowerCase();
  let counter = '';

  for (let i = 0; i < count; i++) {
    counter += greeting + ' ';
  }
  console.log(counter);
  res.send(counter);
});

app.listen(5500, () => {
  console.log('Listening in port 5500');
});
