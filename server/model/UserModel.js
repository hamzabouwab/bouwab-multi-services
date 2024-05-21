import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique:true
    },
    password: {
      type: String,
      required: true,
    }
  },
  {
    // collection:'admin',
    timestamps:true
  }
);

const UserModel = model('Admin',userSchema)

export default UserModel