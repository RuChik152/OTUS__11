import mongoose from "mongoose";

const {Schema} = mongoose

export interface Lesson {
    name: string,
    desc: string,
    date: string,
    course_id: any,
    comments: any[],
}

export const LessonSchema = new Schema<Lesson>({
    name: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: false,
        default: 'Описание урока:'
    },

    date: {
        type: String,
        required: true
    },

    course_id: {
        type: Schema?.Types.ObjectId,
        ref: 'Course'
    },

    comments: [{
        type: Schema?.Types.ObjectId,
        ref: 'Comments'
    }]
})


export const LessonModel = mongoose.model('Lesson', LessonSchema, 'lesson');