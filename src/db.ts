import mongoose from 'mongoose'

export default async function connectDB() {
    await mongoose.connect(`${process.env.CONNECT_MONGO}`)
}