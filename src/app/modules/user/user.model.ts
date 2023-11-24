import { Schema, model } from 'mongoose';
import bcrypt from 'bcrypt';
import User, { UserModel } from './user.interface';


const userSchema = new Schema<User, UserModel>({
  userId: {
    type: Number,
    unique: true,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  fullName: {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
  },
  age: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  hobbies: {
    type: [String],
    required: true,
  },
  address: {
    street: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
  },
  orders: [
    {
      productName: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
    },
  ],
});

// Hash password before saving to the database
userSchema.pre('save', async function (next) {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(this.password, salt);
    this.password = hashedPassword;
    next();
  } catch (error) {
    console.log(error);
  }
});

// Creating A Static Method
userSchema.statics.isUserExist =async function (userId : string) {
    const existingUser = await User.FindOne({userId})
    return existingUser;
}

export const UserModel = model<User>('User', userSchema);
