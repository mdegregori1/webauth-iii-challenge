const jwt = require("jsonwebtoken"); // installed this

const Users = require("../users/users-model.js")
module.exports = (req, res, next) => {
    const token = req.headers.authorization; 

    console.log('token on mw', token)
        if(token) {
          jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
              if(err){
                console.log('failed verify', err)
                res.status(401).json({message: "the token is invalid"})
              } else {
                req.decodedToken = decodedToken;
                next();
              }
          })
        } else {
          res.status(400).json({message: "please enter your login credentails and try again"})

        }
};
