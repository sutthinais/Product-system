const {
  create,
  getUser,
  getUserByUserId,
  updateUserByUserId,
  deleteUserByUserId,
  getUserByUserEmail
} = require("./user.service");
const {
  hashSync,
  genSaltSync,
  compareSync
} = require("bcrypt");
const pool = require("../../config/database");
const gettokenuser = require("jsonwebtoken");
module.exports = {
  createUser: (req, res) => {
    const body = req.body;
    const salt = genSaltSync(10);
    body.password = hashSync(body.password, salt);
    create(body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database connection errror"
        });
      }
      return res.status(200).json({
        success: 1,
        data: results
      });
    });
  },
  getUser: (req, res) => {
    getUser((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        message: results
      });
    });
  },
  getUserByUserId: (req, res) => {
    const id = req.params.id;
    getUserByUserId(id, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "Record not Found"
        });
      }
      results.password = undefined;
      return res.json({
        success: 1,
        data: results
      });
    });
  },
  updateUserByUserId: (req, res) => {
    const data = req.body;
    data.password = hashSync(data.password, genSaltSync(10));
    updateUserByUserId(data, (err, results) => {
      if (err) {
        console(err);
        return;
      }
      return res.json({
        success: 1,
        message: "updated successfully"
      });
    });
  },
  deleteUserByUserId: (req, res) => {
    const id = req.params;
    deleteUserByUserId(id, (err, results) => {
      if (err) {
        console(err);
        return;
      }
      return res.json({
        success: 1,
        message: "updated successfully"
      });
    });
  },
  getUserByUserEmail: (req, res) => {
    const body = req.body;
    getUserByUserEmail(body.email, (err, results) => {
      if (err) {
        return;
      }
      if(!results){
        return res.json({
          success:0,
          message:"Invalid email or password"
        });
      }
      const result = compareSync(body.password,results.password);
      if(result){
        results.password = undefined;
        const jsontoken = gettokenuser.sign({result:results},process.env.JWT_KEY,{
          expiresIn:"7d"
        });
        return res.json({
          success:1,
          message:"login successfully",
          token:jsontoken
        });
      }else{
        return res.json({
          success:0,
          message:"Invalid email or password"
        });
      }
    });
  }
};