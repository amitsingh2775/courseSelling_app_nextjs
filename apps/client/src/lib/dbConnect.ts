import mongoose from "mongoose";
let alreadyDone=false;

export async function ensureConnectDB() {
    if(alreadyDone){
        return;
    }
    alreadyDone=true;
    await mongoose.connect('mongodb+srv://dearjhon977:18745@cluster0.viogx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    

}