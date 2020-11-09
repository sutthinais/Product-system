const {
    getGoods,
    getGoodsById,
    updateGoodsById,
    deleteGoodsById,
    insertGoodsById,
} = require("../goods/goods.service");
module.exports = {
    updateGoodsById: (req, res) => {
       const body =  req.body;
       updateGoodsById(body,(err, results) => {
            if (err) {
                console.log(err);
                return res.json({
                    success: 0,
                    message: "not get data!"
                });
            }
            return res.json({
                success: 1,
                message: "update data success!"
            });
        });
    },
    getGoods: (req, res) => {
        getGoods((err, results) => {
            if (err) {
                console.log(err);
                return res.json({
                    success: 0,
                    message: "not get data!"
                });
            }
            return res.json({
                success: 1,
                message: results
            });
        });
    },
    getGoodsById: (req, res) => {
       const id =  req.params.id;
       getGoodsById(id,(err, results) => {
            if (err) {
                console.log(err);
                return res.json({
                    success: 0,
                    message: "not get data!"
                });
            }
            return res.json({
                success: 1,
                message: results
            });
        });
    },
    deleteGoodsById: (req, res) => {
       const id =  req.params.id;
       deleteGoodsById(id,(err, results) => {
            if (err) {
                console.log(err);
                return res.json({
                    success: 0,
                    message: "not get data!"
                });
            }
            return res.json({
                success: 1,
                message: "delete data success!"
            });
        });
    },
    insertGoodsById: (req, res) => {
        const body = req.body;
        insertGoodsById(body,(err, results) => {
            if (err) {
                console.log(err);
                return res.json({
                    success: 0,
                    message: "not get data!"
                });
            }
            return res.json({
                success: 1,
                message: "insert data success!"
            });
        });
    },
    
};