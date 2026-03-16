const mongoose = require("mongoose");

mongoose.connect(`mongodb://127.0.0.1:27017/mongopractice`)
    // .then(() => console.log('Connected to MongoDB...'))
    // .catch(err => console.log('Could not connect to MongoDB...', err));

const userSchema = mongoose.Schema({
    name: String,
    userName: String,
    email: String,
});

// mongoose.model("user", userSchema);

module.exports = mongoose.model("user", userSchema)