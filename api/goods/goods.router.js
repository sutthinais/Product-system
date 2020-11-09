const router = require("express").Router();
const { getGoods,getGoodsById,updateGoodsById,deleteGoodsById } = require("./goods.controoler");

router.get("/",getGoods);
router.get("/:id",getGoodsById);
router.patch("/",updateGoodsById);
router.delete("/:id",deleteGoodsById);
module.exports = router;