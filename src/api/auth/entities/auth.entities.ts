import mongoose from "mongoose";
import bcrypt from 'bcrypt'
import {User} from "../../users/entities/users.entities";
import {NextFunction} from "express";
const {Schema} = mongoose

export interface Auth {
    email: string,
    pass: string
}


export const AuthSchema = new Schema<Auth>({
    email: {
        type: String,
        required: true,
    },

    pass: {
        type: String,
        required: true,
    },
})

AuthSchema.pre("save", async function (next){
    const hash = await bcrypt.hash(this.pass, 10)
    this.pass = hash;
    next()
})

export const AuthModel = mongoose.model('Auth', AuthSchema, 'user')