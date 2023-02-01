const mongoose = require('mongoose');

mongoose. connect(
    process.env.MONGODB_URL || 'mongodb://localhost:3000/social-network',
    {
        userNewUrlParser: true,
        userUnifiedTopology: true,
    }
);


// use this to log mongo being executed
mongoose.set('debug', true);

module.exports = mongoose.connection;