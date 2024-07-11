import mongoose from "mongoose";

export const connectDb = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "nodejsApi",
    })
    .then((c) => console.log(`database connected ${c.connection.host}`))
    .catch((e) => console.log(e));
};
