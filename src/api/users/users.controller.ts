import express, {raw, Request, Response} from "express";
import {addUserCourse, deleteUser, delUserCourse, getUserData, getUsers, updateUser} from "./users.service";

const usersController = express.Router()

usersController.get('/', async (req: Request, res: Response) => {
    const users = await getUsers()
    res.status(200).send(users)
})

usersController.get('/:id',  async (req: Request, res: Response) => {
    const user = await getUserData(req.params.id)
    res.status(user.status).send(user.data)
})

usersController.patch('/:id', async (req: Request, res: Response) => {
    const updateDataToUser = await updateUser(req.params.id, req.body)
    res.status(updateDataToUser.status).send(updateDataToUser.data)
})

usersController.put('/:id/:course_id', async (req: Request, res: Response) => {
    const user = await addUserCourse(req.params.id, req.params.course_id)
    res.status(user.status).send(user.data)
})

usersController.delete('/:id/:course_id', async (req: Request, res: Response) => {
    const deleteCourse = await delUserCourse(req.params.id, req.params.course_id)
    res.status(deleteCourse.status).send(deleteCourse.data)
})

usersController.delete('/:id', async (req: Request, res: Response) => {
    const delUser = await deleteUser(req.params.id)
    res.status(200).send(delUser)
})

export default usersController;