import express from 'express';
import userRoutes from './routes/user.routes.js'

const app = express()

app.use('/api/user',userRoutes)


app.get('/',(req,res)=>{
    res.status(200).json({message:"Chat Backend running mast!!!"})
})
app.listen(3000,()=>{
    console.log(`http://localhost:3000`)
})