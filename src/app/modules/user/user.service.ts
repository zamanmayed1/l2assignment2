import User from "./user.interface";
import { UserModel } from "./user.model";

const createUserService = async (userData: User) => {
    try {

        const result = await UserModel.create(userData);
        return result;
    } catch (error) {
        return error;
    }
};

const getallUserService = async () => {
    try {
        const result = await UserModel.find({}).select({_id: 0,username: 1,fullName: 1, age: 1, email : 1, address: 1})
        return result;
    } catch (error) {
        return error;
    }
};
const getAUserByUserIdService = async (userId: string)  => {
    try {
        const result = await UserModel.find({userId : userId}).select({_id: 0, password : 0})
        return result;
    } catch (error) {
        return error;
    }
};

export const UserService = {
    createUserService,
    getallUserService,
    getAUserByUserIdService
};
