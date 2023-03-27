const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 8,
  },
});

const User = mongoose.model("User", userSchema);

User.generateAuthToken = (id) => {
  const token = jwt.sign({ id }, "secretHandShake");
  return token;
};

User.confirmCredentials = async (email, password) => {
  try {
    const user = await User.findOne({ email, password });
    if (!user) {
      throw new Error("Invalid Credentials");
    }
    return user;
  } catch (error) {
    console.log(error);
  }
};

module.exports = User;
