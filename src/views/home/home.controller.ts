import express from "express";
import {getCourse} from "../../api/courses/courses.service";
const HomeController = express.Router()

HomeController.get('/', async (_, res) => {
    const data  = await getCourse()
    res.render('home', {
        host: process.env.HOST,
        courses: data,
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
    });
})

export default HomeController;