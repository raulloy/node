import { connect } from 'mongoose';
import config from './config.js';

// mongoose
//   .connect(config.MONGODB_URL)
//   .then(() => {
//     console.log('Connected to mongodb');
//   })
//   .catch((error) => {
//     console.log(error.reason);
//   });

async function dbConnection() {
  const DB_URI = config.MONGODB_URL;
  await connect(DB_URI);
}

export default dbConnection;
