import express, {Request, Response} from "express";
import {createUser, loginUser} from "./auth.service";

const authController = express.Router();

authController.post('/signup', async (req: Request, res: Response) => {
    const sgnInUser = await createUser(req.body)
    res.status(sgnInUser.status).send(sgnInUser.data);

})

authController.post('/signin', async (req: Request, res: Response) => {
    const singUpUser = await loginUser(req.body)
    res.status(singUpUser.status).send(singUpUser.data)
})



export default authController;