require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.SERVER_PORT || 4000;

app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

// Connect to MongoDB using Mongoose
const mongoose = require('mongoose');
mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('Connected to MongoDB');
  // Start the Express server after successfully connecting to MongoDB
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error.message);
});
