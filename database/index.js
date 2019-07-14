var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console,
  'connection error:'));

db.once('open', function () {
  console.log('Connection worked!')
})

module.exports = db;