const mongoose = require('mongoose');

const uri = 'mongodb://localhost/test';

mongoose.connect(uri);

const db = mongoose.connection;

db.on('connected', () => console.log('Mongoose db connection established with: ' + uri));

db.on('error', (err) => console.error('Mongoose connection error: ' + err));

db.on('disconnected', () => console.log('Mongoose disconnected'));

process.on('SIGINT', () => {
  db.close(() => {
    console.log('Mongoose connection closed with node process.');
    process.exit(0);
  })
});
