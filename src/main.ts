import express from 'express';
import { doAuth } from '@nx-node-tutorial/auth';

const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();

app.get('/', (req, res) => {
  res.send({ message: 'Hello API' });
});

app.post('/auth', (req, res) => {
  res.send(doAuth());
});

app.listen(port, () => {
  console.log(`[ ready ] http://localhost:${port}`);
});
