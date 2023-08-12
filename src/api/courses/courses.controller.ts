import express, {raw, Request, Response} from "express";
import {createCourse, deleteCourse, getCourse, getOneCourse, updateOneCourse} from "./courses.service";

const coursesController = express.Router()

coursesController.get('/',  async (_: Request, res: Response) => {
    const list = await getCourse()
    res.status(200).send(list)
})
coursesController.get('/:id', async (req: Request, res: Response) => {
    const course = await getOneCourse(req.params.id)
    res.status(200).send(course);
})

coursesController.post('/', async (req: Request, res: Response) => {
    const course = await createCourse(req.body)
    res.status(200).send({ok: 1, data: course})
})

coursesController.patch('/:id', async (req: Request, res: Response) => {
    const course = await updateOneCourse(req.params.id, req.body);
    res.status(200).send(course);
})

coursesController.delete('/:id',  async (req: Request, res: Response) => {
    const delCourse= await deleteCourse(req.params.id);
    res.status(delCourse.status).send(delCourse.data);
})


export default coursesController;