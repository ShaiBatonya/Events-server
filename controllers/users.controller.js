const User = require("../models/User");
const bcrypt = require("bcrypt");
const JWT = require("jsonwebtoken");

module.exports = {
  login: async (req, res) => {
    try {
      const { user_name, user_password } = req.body;

      const user = await User.findOne({ user_name });

      const answer = await bcrypt.compare(user_password, user.user_password);

      if (!answer) {
        throw new Error("bad credentials");
      }

      const token = await JWT.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: 10800,
      });

      return res.status(200).json({
        success: true,
        message: "user successfully login",
        token,
      });
    } catch (error) {
      return res.status(401).json({
        message: "error in login request",
        error: error.message,
      });
    }
  },
  auth: async (req,res) => {

    try {
        const token = req.headers.authorization.split(' ')[1];

        const decode = JWT.verify(token, process.env.JWT_SECRET);

        if (!decode) {
            throw new Error("user dont have access, token failed")
        }

        const user = await User.findOne({_id:decode.id}, "-user_password");

        return res.status(201).json({
            success:true,
            message:"user have access",
            user
        })
        
    } catch (error) {
        return res.status(500).json({
            message:"error in auth request",
            error:error.message
        });
    }
  }
};
