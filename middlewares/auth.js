const User = require("../models/User");
const JWT = require("jsonwebtoken");

const auth = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];

        const decode = JWT.verify(token, process.env.JWT_SECRET);

        if (!decode) {
            throw new Error("user dont have access, token failed")
        }

        const user = await User.findOne({_id:decode.id});

        req.user = user;

        next();
        
    } catch (error) {
        return res.status(500).json({
            message:"error in auth request",
            error:error.message
        });
    }
};

module.exports = auth;
