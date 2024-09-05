const { verify } = require("jsonwebtoken");

class Auth {
  authenticate(req, res, next) {
    try {
      const authToken = req.headers['authorization']

    if(authToken != undefined){
        const bearer = authToken.split(' ');
        var token = bearer[1];
    }

    const verifyToken = verify(token, process.env.SECRET_KEY)
    console.log(verifyToken)
    if(verifyToken) {
      next()
    } else{
      res.json('Token invalido!')
    }
    } catch (error) {
      console.error(error)
    }
  }
}

module.exports = new Auth()