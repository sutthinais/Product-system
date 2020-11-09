const pool = require("../../config/database");

module.exports = {
  getGoods: (callBack) => {
    pool.query(
      'SELECT * FROM products',
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
      'SELECT * FROM products WHERE`product_code` = ?',
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
      'UPDATE `products` SET `name_product`=?,`name_company`,`seve_person`=?,`department`=?,`seller`=?,`consignee_product`=?,`discription_product`=? WHERE product_code=?',
      [data.name_product,data.name_company,data.seve_person,data.department,data.seller,data.consignee_product,data.discription_product],
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
      'DELETE FROM `products` WHERE `products`.`product_code` = ?',
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
      "INSERT INTO `products` (`product_code`, `name_product`, `name_company`, `seve_person`, `department`, `seller`, `consignee_product`, `discription_product`) VALUES (NULL, ?, ?, ?, ?, ?, ?, ?)",
      [
        data.name_product,
        data.name_company,
        data.seve_person,
        data.department,
        data.seller,
        data.consignee_product,
        data.discription_product],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};