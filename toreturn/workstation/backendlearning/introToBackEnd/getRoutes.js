//? Creating routes for any applications

//  Requiring express
const express = require('express');
// Init express
const app = express();

// Get route to root
app.get('/', (req, res) => {
  res.send('Logged');
});

// Get route to dog
app.get('/dog', (req, res) => {
  console.log('Someone made a get request to dog route');
  res.send('I am a dog');
});

//  Route parameters/route variables or path parameters, what are they? //? Learn more about...
//* It's a way to define a route pattern so we don't we don't define subroutes multiple times

// This is how you make a route paramether //* Adding thecollon (:)
app.get('/dog/:randomRoute', (req, res) => {
  // Checking the req obj for the info we need out of the paramethers ex:
  console.log(req.params);
  console.log('Someone made a get request to random route');
  res.send('RANDOM ROUTE');
});

// This is how you make a route paramether with multiple paramether //* Adding : to paths that change
// This way we can make dynamic webpages
app.get('/dog/:randomRoute/comments/:id/:title/', (req, res) => {
  // Checking the req object for the info we need out of the paramethers (multiple params ex:
  console.log(req.params);
  console.log('Someone made a get request to multiple random routes');
  res.send('MULTIPLE RANDOM ROUTE');
});

// Request to any route that is not defined by us (can be used as 404 page)
// ! Never put the * route as the first route always last
app.get('*', (req, res) => {
  res.send('You are lost in here');
});

// Establish connection to port
app.listen(5000, () => {
  console.log('Connected to the server');
});
