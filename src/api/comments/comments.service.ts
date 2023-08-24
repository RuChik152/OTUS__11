import {Comments, CommentsModel} from "./entities/comments.entities";
import {LessonModel} from "../lesson/entities/lesson.entities";

export async function addComments(data: Comments){
    try {
        const comments = await CommentsModel.create(data)
        await LessonModel.findByIdAndUpdate(data.lesson_id, {$push: {comments: comments._id}})
        return comments;
    } catch (err) {
        throw err;
    }
}