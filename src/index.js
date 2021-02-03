import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import userRoutes from './routes/users.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use('/users', userRoutes);

app.get('/', (req, res) => {
  res.status(200).send('NodeJS + Express API REST Full')
});

app.get('/*', (req, res) => {
  res.status(404).send('404 - Page not found')
});

app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`));
