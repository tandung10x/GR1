const managerRouter= require("./manager.router")
const roomRouter= require("./room.router")
const statisticalRouter= require("./statistical.router")
const errorHandle= require("../middlewares/errorHandler")

module.exports = (app)=>{
  app.use("/api/managers", managerRouter);
  app.use("/api/rooms", roomRouter);
  app.use("/api/statisticals", statisticalRouter);
  app.use(errorHandle);
}