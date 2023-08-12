import {Course, CourseModel} from "./entities/course.entities";
import mongoose, {Schema, Types } from "mongoose";





export async function getCourse() {
    try {
        return CourseModel.find().populate('lessons').lean().exec();
    } catch (err) {
        throw err;
    }
}

export async function createCourse(data: Course) {
    try {
        return CourseModel.create(data)
    } catch (err) {
        throw err;
    }
}

export async function getOneCourse(id: string) {
    try {
        const course = await CourseModel.findById(id)
            .populate('lessons')
            .lean()
            .exec();
        return course;
    } catch (err) {
        throw err;
    }
}

export async function updateOneCourse(id: string, data: Course) {
    try {
        await CourseModel.findByIdAndUpdate(id, {...data})
        return await CourseModel.findById(id)
    } catch (err) {
        throw err;
    }
}

export async function deleteCourse(id: string) {
    try {
      const course = await CourseModel.findByIdAndDelete(id)
      if (course) return {status: 200, data: course}
      return {status: 404, data: 'Course Not Found'}
    } catch (err) {
        throw err;
    }
}
