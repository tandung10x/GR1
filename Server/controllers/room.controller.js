const roomModel= require("../models/room.model")

module.exports= {
  getAll: async (req, res, next)=>{
    return res.status(200).json(await roomModel.find());
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
  }
}