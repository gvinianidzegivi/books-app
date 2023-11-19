require('../src/configs/db').connect();

const express = require('express');
const cors = require('cors');

const rootRouter = require('./routes/index.js');
const app = express();

const PORT = process.env.PORT || 8080;

const corsOptions = {
  origin: 'http://localhost:5173',
};
app.use(cors(corsOptions));
app.use(express.json());
app.use('/api/v1', rootRouter);

app.listen(PORT, console.log(`App is listening on PORT: ${PORT}`));
