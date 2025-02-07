const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    ssl: true,  // Force SSL
  })
    .then(() => {
      console.log('MongoDB connected');
    })
    .catch((err) => {
      console.error('Error connecting to MongoDB:', err);
    });

module.exports = mongoose.connection;
