import mongoose from "mongoose";
import express, {Request, Response} from "express";
import {addComments} from "./comments.service";

const commentsController = express.Router()

commentsController.post('/', async (req: Request, res: Response) => {
        const comment = await addComments(req.body)
        res.status(200).send(comment)
})
export default commentsController;