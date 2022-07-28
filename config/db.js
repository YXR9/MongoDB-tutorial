//Import the mongoose module
const mongoose = require('mongoose');

// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;

module.exports = app => {
const uri = "mongodb+srv://Ru:blFfX4iYwK2fqOV9@mongodb-tutorial.xca0qfh.mongodb.net/?retryWrites=true&w=majority";
    mongoose
    .connect(uri, { 
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(client => {
      console.log("已經連接到 MongoDB-Tutorial 資料庫囉!");
    })
    .catch(err => {
      console.log("Cannot connect to the database...", err);
      process.exit();
    })
}