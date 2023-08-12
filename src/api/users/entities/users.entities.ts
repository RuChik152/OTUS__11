import mongoose from "mongoose";
const {Schema} = mongoose;

export interface User {
    email?: string,
    pass?: string,
    firstName?: string,
    lastName?: string,
    birthday?: string,
    years?: number,
    courses?: any[]
}

export const UserSchema = new Schema<User>({
    email: {
        type: String,
        required: true,
    },

    pass: {
        type: String,
        required: true,
    },

    firstName: {
        type: String,
        required: false,
        default: 'NoName'
    },

    lastName: {
        type: String,
        required: false,
        default: 'NoName'
    },

    birthday: {
        type: String,
        required: false,
        default: 'NoData'
    },

    years: {
        type: Number,
        required: false,
        default: 0
    },

    courses: [{
        type: Schema?.Types.ObjectId,
        ref: 'Course'
    }],
})

export const UserModel = mongoose.model('User', UserSchema, 'user')