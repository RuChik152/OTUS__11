import mongoose from "mongoose";

const {Schema} = mongoose

export interface Comments {
    text: string,
    author: string,
    lesson_id: any,
}

export const CommentsSchema = new Schema<Comments>({
    text: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: false,
        default: 'No Name'
    },
    lesson_id: {
        type: Schema?.Types.ObjectId,
        ref: 'Lesson'
    }
},
    {
        timestamps: true
    })

export const CommentsModel = mongoose.model('Comments', CommentsSchema, 'comments')