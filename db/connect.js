const mongoose = require("mongoose");

const connectToDB = async () => {
  try {
    const db = await mongoose.connect(
      "mongodb+srv://thunderstruck772:123321@cluster0.vbxnqw9.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log(`connected to ${db.connection.host}`);
  } catch (error) {
    console.log(error)
  }
};

module.exports = connectToDB;
