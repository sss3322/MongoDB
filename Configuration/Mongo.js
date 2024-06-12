const mongoose=require('mongoose')
const connection=async()=>{
    try{
        const connect =await mongoose.connect("mongodb+srv://suchithrashanmukhan:ss7235@cluster0.niiuzht.mongodb.net/?retryWrites=true&w=majority")
        console.log('DataBase is connected');
    }
    catch(err){
        console.log(`error :${err}`)
        process.exit()

    }
}
module.exports=connection