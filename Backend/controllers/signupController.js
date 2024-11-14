const { User } = require("../models/User");
const bcrypt = require("bcrypt");

const signupController = async (req, res) => {
  try {
    const { email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      email,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(200).json({ message: "Signup successful!" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = signupController;
