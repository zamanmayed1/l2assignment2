import { Model } from "mongoose";

interface User {
  userId: number;
  username: string;
  password: string;
  fullName: {
    firstName: string;
    lastName: string;
  };
  age: number;
  email: string;
  isActive: boolean;
  hobbies: string[];
  address: {
    street: string;
    city: string;
    country: string;
  };
  orders?: {
    productName: string;
    price: number;
    quantity: number;
  }[];
}

export interface UserModel extends Model<User> {
  isUserExist(userId: string) : Promise<User | null>
}



export default User;
