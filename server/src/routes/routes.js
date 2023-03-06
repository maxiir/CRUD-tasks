import { Router } from "express";
import {controller} from '../controllers/controller.js'
export const router = Router()

router.post('/api/addnote', controller.addNote)
router.get('/api/allnotes', controller.allNotes)
router.get('/api/getnote/:id', controller.getNote)
router.delete('/api/delnote/:id', controller.delNote)
router.put('/api/editnote/:id', controller.updateNote)