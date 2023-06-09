const mongoose = require('mongoose');
const URI = 'mongodb://0.0.0.0/tp5';
mongoose.connect(URI)
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err))
module.exports = mongoose;