import express from 'express';
import cors from 'cors';
import { accountInsights } from './src/Facebook/facebook.routes.js';

const app = express();

app.use(cors());

app.use('/', accountInsights);

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
