import express from "express";
import coursesController from "./courses/courses.controller";
import lessonController from "./lesson/lesson.controller";
import commentsController from "./comments/comments.controller";
import authController from "./auth/auth.controller";
import usersController from "./users/users.controller";
const ApiController = express.Router()

ApiController.use('/auth', authController)

ApiController.use('/user', usersController)
ApiController.use('/course', coursesController)
ApiController.use('/lesson', lessonController)
ApiController.use('/comments', commentsController)


export default ApiController;

