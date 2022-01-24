const mongoose = require("mongoose");

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI);

  console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);
};

module.exports = connectDB;

require('dotenv').config({ path: '.env' });

// MONGO_URI = 'mongodb+srv://gill:gill@cluster0.myaqn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
// JWT_SECRET= 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJnaWxscHJlZXRzaW5naGdpbGwiLCJuYW1lIjoiR2lsbHByZWV0IiwiYXVkIjoiZnVuLWtpY2tvZmYtcHJvamVjdC15bWFxYiJ9.ju0cDcxwVUtcWUXbmff4JLlLOi5kmHyqWCp1ynX-hzg'