'use strict';

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3004;

app.get('/', (req, res, next) => {
  res.status(200).send('Good day to you world from our simple server!');
})

app.listen(PORT, () => console.log('listening on ', PORT));

