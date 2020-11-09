const pool = require("../../config/database");

module.exports = {
  getGoods: (callBack) => {
    pool.query(
      'SELECT * FROM `tb_goods` ',
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
      'SELECT * FROM `tb_goods` WHERE `id_goods` = ?',
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
      'UPDATE `tb_goods` SET `name_goods`=?,`price_goods`=?,`date_goods`=? WHERE id_goods=?',
      [data.name_goods,data.price_goods,data.date_goods,data.id_goods],
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
      'DELETE FROM `tb_goods` WHERE `tb_goods`.`id_goods` = ?',
      [id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },

};