const roomModel= require("../models/room.model")

module.exports= {
  getAll: async (req, res, next)=>{
    let room= await roomModel.find().populate("id_user");
    return res.status(200).json(room)
  },
  getRoomByPrice: async (req, res, next)=>{
    const {price1, price2, guest} = req.params;    
    let rooms= await roomModel.find({cost_per_day: {$gte: Number(price1), $lte: Number(price2)}, max_people: {$gte: Number(guest)}, isFree: 1});
    return res.status(200).json(rooms);
  },
  createRoom: async (req, res, next)=>{
    let {...body}= req.body;
    let room= await roomModel.create(body);
    return res.status(201).json(room);
  },
  updateRoom: async (req, res, next)=>{
    let id= req.params.id;
    let {...body}= req.body;
    let room= await roomModel.findByIdAndUpdate(id, body, {new: true});
    return res.status(200).json(room);
  },
  deleteRoom: async (req, res, next)=>{
    let id= req.params.id;
    let room= await roomModel.findByIdAndDelete(id);
    return res.status(200).json(room);
  },
  getRoomById: async (req, res, next)=>{
    let id= req.params.id;
    return res.status(200).json(await roomModel.findById(id));
  },
  getRoomByUser: async (req, res, next)=>{
    let idUser= req.params.id;
    let room= await roomModel.find({id_user: idUser}).populate("id_user");
    return res.status(200).json(room);
  }
}