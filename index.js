import express from "express";
import cors from "cors"
import { PORT } from "./config.js";
import indexrouter from "./routes/index.routes.js";
import taskRoutes from './routes/task.routes.js'
import {dirname, join} from 'path'
import { fileURLToPath } from "url";


const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url))
console.log(__dirname)
app.use(cors())
app.use(express.json())

app.use(taskRoutes)
app.use(indexrouter)


app.use(indexrouter)
app.listen(PORT)
console.log(`server escuchando el ${PORT}`)

app.use(express.static(join(__dirname, '../client/cliente/dist' )))
