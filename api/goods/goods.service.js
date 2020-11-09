const pool = require("../../config/database");

module.exports = {
  getGoods: (callBack) => {
    pool.query(
      'SELECT * FROM `products`',
      [],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getGoodsById: (data,callBack) => {
    pool.query(
      'SELECT * FROM `products` WHERE `productID` = ?',
      [data],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  updateGoodsById: (data,callBack) => {
    pool.query(
      'UPDATE `products` SET `name`=?,`productCode`=?,`quantity`,`price`=? WHERE productID=?',
      [data.name,data.productCode,data.quantity,data.price],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  deleteGoodsById: (id,callBack) => {
    pool.query(
      'DELETE FROM `products` WHERE `products`.`productID` = ?',
      [id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  insertGoodsById: (data,callBack) => {
    pool.query(
      'INSERT INTO `products`(`productCode`, `name`, `quantity`, `price`) VALUES (?,?,?,?)',
      [data.productCode,data.name,data.quantity,data.price],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};