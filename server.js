const express = require('express');
const csrf = require('./routes/csrf');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.use(
  express.static('public', {
    setHeaders: (res, path, stat) => {
      res.header('X-Frame-Options', 'SAMEORIGIN');
    },
  })
);

app.use('/csrf', csrf);

app.get('/', (req, res, next) => {
  res.end('Top Page');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
