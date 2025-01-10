
import mongoose from 'mongoose';

const connectMongo = async () => {
  try{
    if (mongoose.connection.readyState === 1) {
        return;
      }
      await mongoose.connect(process.env.MONGO_URI);
      console.log("database connecteda")
  }
  catch(error){
    console.log("db error:",error)
  }
};

export default connectMongo;

