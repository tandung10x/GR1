const express= require("express")
const asyncHandle = require("../middlewares/asyncHandle")
const router= express.Router();
const {
  getAll,
  createRoom,
  updateRoom,
  deleteRoom,
  getRoomById,
  getRoomByUser,
  getRoomByPrice
}= require("../controllers/room.controller")

router
  .route("")
  .get(asyncHandle(getAll))
  .post(asyncHandle(createRoom))

router
  .route("/user/:id")
  .get(asyncHandle(getRoomByUser))

router
  .route("/:id")
  .get(asyncHandle(getRoomById))
  .patch(asyncHandle(updateRoom))
  .delete(asyncHandle(deleteRoom))  

router
  .route("/:price1/:price2/:guest")
  .get(asyncHandle(getRoomByPrice))


module.exports= router;