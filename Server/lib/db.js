import mongoose from "mongoose";

//mongodb connection
export const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () =>
      console.log("DataBase Connected")
    );
    await mongoose.connect(`${process.env.MONGODB_URI}/Talksy`);
  } catch (error) {
    console.log(error);
  }
};
