const express = require('express');
const api = require('./routes/api');
const app = express();
const appAPI = express();
const port = 3000;
const portAPI = 3001;

app.use(express.static('public'));

appAPI.use(
  express.static('public_target', {
    // ハンズオン①
    // setHeaders: (res, path, stat) => {
    //   res.set('X-Frame-Options', 'SAMEORIGIN');
    // },
  })
);

// appAPI.use('/api', api);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

appAPI.listen(portAPI, () => {
  console.log(`Server is running on http://localhost:${portAPI}`);
});
