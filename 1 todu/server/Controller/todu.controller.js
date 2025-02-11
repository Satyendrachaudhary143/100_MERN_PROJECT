
import { Todu } from "../models/Todu.models.js";

export const getTodu = async (req, res) => {
    try {
        const todues = await Todu.find()
        res.status(200).json({
            message: "get todu",
            success:true,
            data:todues
        })
    } catch (error) {
        console.log(error)
    }
   
}

export const saveTodu = async (req, res) => {
    try {
        const { todudate,todu} = req.body
   await Todu.create({
    todudate,
        todu
   })
    
    return res.status(200).json({
        message: "add todu",
        success:true,
    })
    } catch (error) {
        console.log(error);
        
    }
    
}

export const updateTodu = async (req, res) => {
    try {
        const { id } = req.params;
        const { todudate,todu } = req.body;
        Todu.findByIdAndUpdate(id, { todudate, todu }).catch((error) => { console.log(error) });
        return res.status(200).json({
            message: "update success",
            success:true,
        })
    } catch (error) {
        console.log(error);
        
    }
}

export const deleteTodu = async (req, res) => {
    try {
        const { id } = req.params;
        Todu.findByIdAndDelete(id).catch((error) => {console.log(error);
         })
        return res.status(200).json({
            message: "delete success",
            success:true,
        })
    } catch (error) {
        console.log(error);
        
    }
}