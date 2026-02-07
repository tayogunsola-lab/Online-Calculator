import express from 'express';
import calculator, { toNumber } from './calculator.js'

const app = express();

app.get('/', (req, res) => {
  res.send('Server is running on port 3000');
});

app.listen(3000);