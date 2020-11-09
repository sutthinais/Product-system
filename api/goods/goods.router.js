const router = require("express").Router();
const { getGoods,getGoodsById,updateGoodsById,deleteGoodsById,insertGoodsById } = require("./goods.controoler");

router.get("/",getGoods);
router.get("/:id",getGoodsById);
router.patch("/",updateGoodsById);
router.delete("/:id",deleteGoodsById);
router.post("/",insertGoodsById);
module.exports = router;