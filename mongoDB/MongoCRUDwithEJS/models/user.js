const mongoose = require("mongoose");

mongoose.connect(`mongodb://127.0.0.1:27017/testapp1`)
    // .then(() => console.log('Connected to MongoDB...'))
    // .catch(err => console.log('Could not connect to MongoDB...', err));

const userSchema = mongoose.Schema({
    name: String,
    username: String,
    email: String,
    imgurl: String,
});

// mongoose.model("user", userSchema);

module.exports = mongoose.model("user", userSchema)