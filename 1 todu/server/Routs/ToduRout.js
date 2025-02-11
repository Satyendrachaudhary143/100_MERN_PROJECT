import express from "express"
import { deleteTodu, getTodu, saveTodu, updateTodu } from "../Controller/todu.controller.js"
const router =express.Router();

router.get('/get', getTodu);
router.post('/save', saveTodu);
router.put('/update/:id', updateTodu);
router.delete('/delete/:id', deleteTodu);

export default router