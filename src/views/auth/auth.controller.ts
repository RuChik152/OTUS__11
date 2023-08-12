import express from "express";

const AuthController = express.Router();


AuthController.get('/signin', (_, res) => {
    res.render('auth', {
        host: process.env.HOST,
        menu: [
            {
                name: 'Список курсов',
                link: '/course'
            },
            {
                name: 'Личный кабинет',
                link: '/lk'
            },
        ]
    });
})

AuthController.get('/signup', (_, res) => {
    res.render('create', {
        host: process.env.HOST,
        menu: [
            {
                name: 'Список курсов',
                link: '/course'
            },
            {
                name: 'Личный кабинет',
                link: '/lk'
            },
        ]
    });
})

AuthController.get('/exit', (_, res) => {
    res.render('exit');
})

export default AuthController;