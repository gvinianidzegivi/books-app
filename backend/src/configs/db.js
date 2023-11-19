const mongoose = require('mongoose');

const URI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.qd4atpl.mongodb.net/`;

exports.connect = () => {
  mongoose
    .connect(URI)
    .then(() => {
      console.log('Successfully connected to database');
    })
    .catch((error) => {
      console.log('database connection failed. exiting now...');
      console.error(error);
      process.exit(1);
    });
};
