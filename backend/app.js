import express from "express";
import cors from "cors"
const app = express()

app.use(cors())

app.get('/',(req,res)=>{
    res.json({
        message : 'welcome back'
    })
})

app.listen('3000',()=>{
    console.log("it is running on port 3000");
    
})