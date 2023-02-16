import { Router } from "express";
import {controller} from '../controllers/controller.js'
export const router = Router()

router.post('/api/addtask', controller.addTask)
router.delete('/api/deltask/:id', controller.delTask)