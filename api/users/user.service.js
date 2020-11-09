const pool = require("../../config/database");
const { hashSync, genSaltSync } = require("bcrypt");

module.exports = {
  create: (data, callBack) => {
    pool.query(
      'INSERT INTO customers(username, email, password) VALUES ( ?, ?, ? )',
      [
        data.name,
        data.email,
        data.password
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getUser: callBack => {
    pool.query(
      'SELECT id_customer ,username, password, email FROM customers',
      [],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    )
  },
  getUserByUserId: (id, callBack) => {
    pool.query('SELECT * FROM `customers` WHERE id_customer = ?', [id], (error, results, fields) => {
      if (error) {
        return callBack(error);

      }
      return callBack(null, results[0]);
    })
  },
  updateUserByUserId: (data, callBack) => {
    pool.query(
      `UPDATE customers SET username=?,email=?,password=? WHERE id_customer =?`,
      [
        data.name,
        data.email,
        data.password,
        data.email,
        data.id
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  deleteUserByUserId: (data, callBack) => {
    pool.query('DELETE FROM `customers` WHERE `customers`.`id_customer ` = ?',
      [data.id], (error, results, fields) => {
        if (error) {
          return callBack(error);

        }
        return callBack(null, results[0]);
      })
  },
  getUserByUserEmail:(email,callBack)=>{
    const sql = "SELECT * FROM `customers` WHERE `email` = ?"
    pool.query(sql,[email],(err,results,fields)=>{
        if(err){
          return callBack(err);
        }

        return callBack(null,results[0]);
    });
  }
};