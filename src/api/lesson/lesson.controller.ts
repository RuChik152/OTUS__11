import express, {Request, Response} from "express";
import {createLesson, deleteLessonFomCourse, getOneLesson, updateLesson} from "./lesson.service";

const lessonController = express.Router()

lessonController.post('/', async (req: Request, res: Response) => {
        const lesson= await createLesson(req.body);
        res.status(200).send(lesson);
})

lessonController.get('/:id', async (req: Request, res)=> {
        const lesson = await getOneLesson(req.params.id);
        res.status(200).send(lesson);
})

lessonController.patch('/:id', async (req: Request, res: Response) => {
        const lesson = await updateLesson(req.params.id, req.body);
        res.status(200).send(lesson);
})

lessonController.delete('/:id/:course_id',  async (req: Request, res: Response) => {
        const deleteLesson = await deleteLessonFomCourse(req.params.id, req.params.course_id);
        res.status(deleteLesson.status).send(deleteLesson.data);
})

export default lessonController