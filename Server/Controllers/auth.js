const connection = require("../Database/database").connection;

module.exports.authenticate = async (req, res, next) => {
  const { email, password } = req.body;
  const queryparams = [email];
  const query = "select * from User_Account where User_Email = ?";
  connection.query(query, queryparams, (err, result) => {
    console.log(result)
    if (err) console.log("error occured");
    if (result[0].Hashed_Password === password) {
      res.send(result[0]).status(200);
    }
  });
};

module.exports.getUser = async (req,res,next) =>{
  const email = req.params.email
  const queryparams = [email]
  const query = "select * from User_Account where User_Email = ?";
  connection.query(query,queryparams, (err, result)=>{
    if (err) console.log("error occured");
    if (result[0]) {
      res.send(result[0]).status(200);
    }
  })

}