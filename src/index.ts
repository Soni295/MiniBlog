import "dotenv/config"
import express from "express"
import cors from "cors"
import { router } from "./routes"

const PORT = process.env.PORT || 3000
const app = express()

app
  .use(cors())
  .use(router)

app.listen(PORT, ()=> console.log(`server listening in the port: ${PORT}`))
