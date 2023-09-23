const express = require('express')
const app=express();
const port=process.env.PORT || 3000;
const cors=require('cors');

app.use(cors({origin:["http://localhost:3000"]}))


app.get("/", (req, res) =>{
    res.send("Codefurry server")
})

app.listen(port,()=>console.log(`server is running on http://localhost:${port}`))