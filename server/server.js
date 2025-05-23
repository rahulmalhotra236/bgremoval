import "dotenv/config"
import express from "express"
import cors from "cors"
import connectDb from "./configs/mongodb.js"
import userRouter from "./routes/userRoutes.js"

//app configs
const PORT = process.env.PORT || 4000
const app = express()
await connectDb()

//Initialize Middleware
app.use(express.json())
app.use(cors())

//API route
app.get("/", (req, res) => res.send("API working"))
app.use("/api/user", userRouter)

app.listen(PORT, () => console.log("Server Running on port" + PORT))
