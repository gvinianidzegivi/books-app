require('../src/configs/db').connect();

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const rootRouter = require('./routes/index.js');

const PORT = process.env.PORT || 8080;

const app = express();

const corsOptions = {
  origin: 'http://localhost:5173',
};

app.use(express.json());
app.use(cors(corsOptions));
app.use('/', rootRouter);

app.listen(PORT, console.log(`App is listening on PORT: ${PORT}`));
