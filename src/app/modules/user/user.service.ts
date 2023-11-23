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

export const UserService = {
    createUserService
};
