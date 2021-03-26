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
      const ext = path.extname(filePath);
      if (ext === '.terrain') {
        res.set('Content-Encoding', 'gzip');
        res.set('Content-Type', 'application/octet-stream');
      }
    },
  }),
);
app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
