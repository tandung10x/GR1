const express= require("express")
const asyncHandle = require("../middlewares/asyncHandle")
const router= express.Router();
const {
  getAll,
  createRoom,
  updateRoom,
  deleteRoom,
  getRoomById
}= require("../controllers/room.controller")

router
  .route("")  
  .post(asyncHandle(createRoom))

router
  .route("/:id")
  .get(asyncHandle(getRoomById))
  .patch(asyncHandle(updateRoom))
  .delete(asyncHandle(deleteRoom))  

router
  .route("/:price1/:price2")
  .get(asyncHandle(getAll))
module.exports= router;