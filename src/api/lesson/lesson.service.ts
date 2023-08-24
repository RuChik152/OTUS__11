import {Lesson, LessonModel} from "./entities/lesson.entities";
import {CourseModel} from "../courses/entities/course.entities";

export async function createLesson(data: Lesson) {
    try {
        const lesson = await LessonModel.create(data)
        await CourseModel.findByIdAndUpdate(data.course_id, {$push: {lessons: lesson._id}})
        return lesson
    } catch (err) {
        throw err;
    }
}

export async function getOneLesson(id: string) {
    try {
        const lesson = await LessonModel.findById(id)
            .populate('comments')
            .exec();
        return lesson;
    } catch (err) {

    }
}

export async function updateLesson(id:string, data: Lesson) {
    try {
        await LessonModel.findByIdAndUpdate(id, {...data})
        return await LessonModel.findById(id);
    } catch (err) {
        throw err;
    }
}

export async function deleteLessonFomCourse(id: string, course_id: string) {
    try {
        const course = await CourseModel.findByIdAndUpdate(course_id, {$pull: {lessons: id}})
        if(course) {
            const  lesson = await LessonModel.findByIdAndDelete(id)
            if (lesson) return {status: 200, data: lesson}
            return {status: 404, data: 'Lesson Not Found'}
        } else {
            return {status: 404, data: 'Course Not Found'}
        }

    } catch (err) {
        throw err;
    }
}