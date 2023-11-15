const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const routes = require('./routes/index.js');

const PORT = process.env.PORT || 8080;

const app = express();

const corsOptions = {
  origin: 'http://localhost:5173',
};

app.use(express.json());
app.use(cors(corsOptions));
app.use(routes);

const URI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.qd4atpl.mongodb.net/`;

mongoose
  .connect(URI)
  .then(() =>
    app.listen(PORT, () =>
      console.log(`The server running on http://localhost:${PORT}`)
    )
  )
  .catch((error) => {
    throw error;
  });
