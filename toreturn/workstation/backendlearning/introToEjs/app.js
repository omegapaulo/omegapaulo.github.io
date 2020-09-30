// ? Working with ejs files to render html to the UI

const express = require('express');

// Init express
const app = express();

/* telling express to use/serve costum files like css or other file from the public folder */
app.use(express.static('public'));

/* Telling express to use the view engine ejs so we don't have to add the file name extention like .ejs to the render method or any other
 */
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  const user = req.params.name;
  // Using the render method to link a file where we write the html in .ejs file
  // Must create a views folder and create the .ejs file inside (express will look for views folder)
  res.render('index', { name: user }); // ? Beautiful way
  // res.render('index.ejs', { name: user }); // ? same as above with the file ending .ejs
  // res.send('connected on root'); // ? Not useful when rendering a lot of content to UI
});

app.get('/:name', (req, res) => {
  const user = req.params.name;
  // Using the render method to link a file where we write the html in .ejs file
  // Must create a views folder and and create the .ejs file inside (express will look for views folder)
  res.render('index', { name: user }); // ? Better way
  // res.render('index.ejs', { name: user }); // ? Old way with the file ending .ejs
  // res.send('connected on root'); // ? Not useful when sending big content to UI
});

app.get('/posts/:random', (req, res) => {
  const posts = [
    { title: 'Post 1', author: 'Omega' },
    { title: 'Post 2', author: 'Paulo' },
    { title: 'Post 3', author: 'Dafioti' },
  ];
  // Response is to render the data Request is for getting the data
  res.render('posts.ejs', { posts }); // ? short hand if the prop same as value - better way

  // res.render('posts.ejs', { posts: posts }); // ? same as above
});

app.listen(5000, () => {
  console.log('Connected on port 5000');
});
