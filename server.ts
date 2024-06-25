import 'dotenv/config';
import express, { Request, Response } from 'express';
import mongoose from 'mongoose';

const app = express();
const port = process.env.SERVER_PORT || 4000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello from Express!');
});

mongoose.connect(process.env.DB_URL as string)
.then(() => {
  console.log('Connected to MongoDB');
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
})
.catch((error: Error) => {
  console.error('Error connecting to MongoDB:', error.message);
});
