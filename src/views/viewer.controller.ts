import express from "express";
import AuthController from "./auth/auth.controller";
import HomeController from "./home/home.controller";
import CourseController from "./course/course.controller";
import LkController from "./lk/lk.controller";

const ViewerController = express.Router()

ViewerController.use('/auth', AuthController)
ViewerController.use('/home', HomeController)
ViewerController.use('/course', CourseController)
ViewerController.use('/lk', LkController)
ViewerController.use('/', (req,res) => {
    res.render('index', {
        menu: [
            {
                name: 'Список курсов',
                link: '/course'
            },
            {
                name: 'Личный кабинет',
                link: '/lk'
            },
            {
                name: 'Выход',
                link: '/auth/exit'
            },
        ]
    })
})

export default ViewerController;