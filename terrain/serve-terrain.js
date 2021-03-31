/* eslint-disable */
const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(
  '/',
  express.static('terrain', {
    setHeaders(res, filePath) {
      res.set('Access-Control-Allow-Origin', '*');
    },
  }),
);
app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
