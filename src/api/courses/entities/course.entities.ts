import mongoose, {SchemaType} from "mongoose";
const {Schema} = mongoose

export interface Course {
    title: string,
    desc: string,
    lessons: []
}

export const CourseSchema = new Schema<Partial<Course>>({
    title: {
        type: String,
        required: true
    },

    desc: {
        type: String,
        required: false,
        default: 'Not Description'
    },

    lessons: [{
        type: Schema?.Types.ObjectId,
        ref: 'Lesson'
    }]
})

export const CourseModel = mongoose.model('Course', CourseSchema, 'course')