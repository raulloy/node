import express from 'express';
import cors from 'cors';
import { accountInsights } from './src/Facebook/facebook.routes.js';
import db from './src/config/mongo.js';
import Contact from './src/models/contactModel.js';

const app = express();

app.use(cors());

db().then(() => {
  console.log('Connected to MongoDB...');
});

app.use('/', accountInsights);

app.get('/api/contacts-by-time-range', async (req, res) => {
  const { since, until } = req.query;

  try {
    const contacts = await Contact.find({
      'properties.hubspot_owner_assigneddate': {
        $gte: new Date(since),
        $lte: new Date(until),
      },
    });

    res.send(contacts);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
