// db.js

const mongoose = require('mongoose');

// Define MongoDB URI
const uri = "mongodb+srv://yuva:cyn2xd6f39Xqlwoa@cluster0.w0xa6ba.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// Connect to MongoDB
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

module.exports = mongoose;
