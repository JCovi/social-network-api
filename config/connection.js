// Establish MongoDB connection using Mongoose and export it for use in other files.

const mongoose = require('mongoose');

const connectionStringURI = `mongodb://127.0.0.1:27017/social-network-api`;

mongoose.connect(connectionStringURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = mongoose.connection;
