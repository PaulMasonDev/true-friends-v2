const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();

app.use(cors());

const port = process.env.PORT || 5000;
const databaseUri = process.env.DATABASEURI;

mongoose.connect(databaseUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(console.log('Connected to MongoDB Database'))
  .catch(err => console.log(err));

app.get('/', (req, res) => {
  res.send('WORKING');
});

app.listen(port, (req, res) => {
  console.log(`Server running on port ${port}`);
});
