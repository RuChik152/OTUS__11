import {User, UserModel} from "./entities/users.entities";


export async function getUsers() {
    try {
        return await UserModel.find()
            .select([
            'email',
            'firstName',
            'lastName',
            'birthday',
            'years'
        ])
            .populate('courses')
            .exec()
    } catch (err) {
        throw err
    }
}

export async function getUserData(id: string) {
    try {
        const user = await UserModel.findById(id)
            .select([
            'email',
            'firstName',
            'lastName',
            'birthday',
            'years'
        ])
            .populate('courses')
            .exec()
        console.log('USER',user);
        if(!user) return { status: 404, data: 'User not found'}
        return {status: 200, data: user};
    } catch (err) {
        throw err;
    }
}

export async function updateUser(id: string, data: User) {
    try {
        await UserModel.findByIdAndUpdate(id, {...data})
        return await getUserData(id)
    } catch (err) {
        throw err;
    }
}

export async function addUserCourse(id: string, course_id: string) {
    try {
        await UserModel.findByIdAndUpdate(id, {$push: {courses: course_id}})
        return await getUserData(id);
    } catch (err) {
        throw err
    }
}

export async function delUserCourse(id: string, course_id: string) {
    try {
        await UserModel.findByIdAndUpdate(id, {$pull: {courses: course_id}})
        return await getUserData(id)
    } catch (err) {
        throw err;
    }
}

export async function deleteUser(id: string) {
    try {
        return await UserModel.findByIdAndDelete(id)
            .select([
                'email',
                'firstName',
                'lastName',
                'birthday',
                'years'
            ])
            .populate('courses')
            .exec()
    } catch (err) {
        throw err;
    }
}