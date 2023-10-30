import mongoose from "mongoose";

const connectDB = async() => {
    try {
        await mongoose.connect("mongodb://tsunekichi:tune0011@ac-sw7kgon-shard-00-00.hp0h06s.mongodb.net:27017,ac-sw7kgon-shard-00-01.hp0h06s.mongodb.net:27017,ac-sw7kgon-shard-00-02.hp0h06s.mongodb.net:27017/?ssl=true&replicaSet=atlas-axhbtc-shard-0&authSource=admin&retryWrites=true&w=majority")
        console.log("Success: Connected to MongoDB")

    } catch(err) {
        console.log("Failure: Unconnected to MongoDB")
        throw new Error()
    }
}

export default connectDB
