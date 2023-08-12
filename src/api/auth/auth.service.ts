import {User} from "../users/entities/users.entities";
import {Auth, AuthModel} from "./entities/auth.entities";
import bcrypt from "bcrypt";
import {getUserData} from "../users/users.service";

export async function createUser(data: User) {
    try {
        const user = await AuthModel.create(data)
        return await getUserData(`${user._id}`)
    } catch (err) {
        throw err;
    }
}

export async function loginUser(data: Auth) {
    try {
        const user = await AuthModel.findOne({email: data.email})
        if(user) {
            const compare = await bcrypt.compare(data.pass, user.pass)
            if (compare) {
                return {status: 200, data: 'JWT_TOKEN'}
            } else {
                return {status: 403, data: 'Password is wrong'}
            }
        } else {
            return {status: 404, data: 'User not found'}
        }
    }catch (err) {
        return {status: 500, data: 'SERVER ERROR'}
    }
}