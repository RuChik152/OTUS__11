import express from "express";
import {getCourse} from "../../api/courses/courses.service";

const LkController = express.Router()

LkController.get('/', async (req, res) => {
    const data = await getCourse()
    res.render('lk', {
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
    })
})

export default LkController;