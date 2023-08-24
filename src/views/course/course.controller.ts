import express from "express";
import {getOneLesson} from "../../api/lesson/lesson.service";
import {getCourse, getOneCourse} from "../../api/courses/courses.service";

const CourseController = express.Router();



CourseController.get('/:id/lesson/:lesson_id', async (req, res) => {
    const lesson = await getOneLesson(req.params.lesson_id)
    if (lesson) {
        res.render('lesson', {
            name: lesson.name,
            desc: lesson.desc
        })
    }
})

CourseController.get('/:id', async (req, res) => {
    const course = await getOneCourse(req.params.id)
    if (course) {
        res.render('itemcourse', {
            title: course.title,
            desc: course.desc,
            lessons: course.lessons,
            course_id: req.params.id,
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
    }

})

CourseController.get('/', async (_, res) => {
    const data = await getCourse()
    res.render('course', {
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

export default CourseController;