const express = require('express')
const app=express();
const port=process.env.PORT || 3030;
const cors=require('cors');
const dotenv=require('dotenv');
dotenv.config()

app.use(cors({origin:["http://localhost:3000"]}))
app.use(express.json())


const mongoose=require('mongoose');
const mongoURL="mongodb://0.0.0.0:27017/mental-health-and-well-being"
let isDatabaseConnected=false;

(
    async ()=>{
        try{
            await mongoose.connect(mongoURL)
            console.log("database connected successfully")
            isDatabaseConnected=true;
        }catch(err){
            console.log("cannot connect to database: " + err.message)
        }
    }
)();



app.use((req,res,next)=>{
    if(isDatabaseConnected){
        next();
    }else{
        res.status(500).send({message:"Database not conneted"})
    }
});

app.get("/", (req, res) =>{
    res.send("Codefurry server")
})

const authRoute=require("./routes/authRoutes")
const usersRoute=require("./routes/usersRoute")
const harassmentsRoute=require("./routes/harassmentRoute")

app.use("/auth",authRoute)
app.use("/harassments",harassmentsRoute)
app.use("/users",usersRoute)

app.listen(port,()=>console.log(`server is running on http://localhost:${port}`))