import express from "express";
import dotenv from "dotenv";
dotenv.config();
import authRoutes from './routes/auth.routes.js'
import messageRoutes from './routes/message.routes.js'
import userRoutes from './routes/user.routes.js'
import connectToMongoDB from "./db/connectToMongoDB.js";
import cookieParser from "cookie-parser";
const app = express();


app.use(express.json());
app.use(cookieParser())


const PORT = process.env.PORT || 5000;



app.use('/api/auth', authRoutes)
app.use('/api/messages', messageRoutes)
app.use('/api/users', userRoutes)

  

app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server running on port ${PORT}`)
});
