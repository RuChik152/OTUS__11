import express, {Request, Response} from "express";
import {createUser, loginUser} from "./auth.service";
import {authValidationSchema, validateAuth, ValidDataRequest} from "./dto/validete-auth";
import {checkSchema, Schema} from "express-validator";

const authController = express.Router();

authController.post('/signup', async (req: Request, res: Response) => {
    const sgnInUser = await createUser(req.body)
    res.status(sgnInUser.status).send(sgnInUser.data);

})

// authController.post('/signin', checkSchema(authValidationSchema as Schema), validateAuth, async (req: Request, res: Response) => {
//     const singUpUser = await loginUser(req.body)
//     res.status(singUpUser.status).send(singUpUser.data)
// })

authController.post('/signin', ValidDataRequest, async (req: Request, res: Response) => {
    const singUpUser = await loginUser(req.body)
    res.status(singUpUser.status).send(singUpUser.data)
})



export default authController;