import 'dotenv/config'
import express, {request, Response} from 'express'
import {ConfigServer} from "./config.server";
import {engine, create} from "express-handlebars";
import path from "path";
import cors from 'cors'
import Middleware from "./middleware/middleware";
import connectDB from "./db";
import ApiController from "./api/api.controller";
import {getCourse, getOneCourse} from "./api/courses/courses.service";
import {getOneLesson} from "./api/lesson/lesson.service";
import AuthController from "./views/auth/auth.controller";
import ViewerController from "./views/viewer.controller";



const app = express();

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))
/**
 * Рабочий пример с применением PUG
 */
// app.set("view engine", "pug");
// app.set('views', path.resolve(__dirname, 'views'))
// app.use("/contact", (_, res) => {
//
//     res.render("contact", {
//         title: "Мои контакты",
//         emailsVisible: true,
//         emails: ["gavgav@mycorp.com", "mioaw@mycorp.com"],
//         phone: "+1234567890"
//     });
// });
//
// app.use("/", function(_, res){
//
//     res.send("Главная страница");
// });


connectDB()
    .then((data) => {
        console.log('CONNECT DATA BASE');
        app.listen(ConfigServer.PORT, () => {
            console.log(`[${ConfigServer.DATA}] SERVER START port:${ConfigServer.PORT}`)
        });
    })
    .catch(err => {console.error(err)})

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.resolve(__dirname, './views'));


app.use('/', ViewerController)
app.use(Middleware);
app.use('/api', ApiController);







