import express from "express";
import helmet from "helmet";
import cors from "cors"
import morgan from 'morgan'
import loadRoutes from "./routes";

const app = express()

app.use(express.json())
app.use(helmet())
app.use(cors())
app.use(morgan('dev'))

loadRoutes(app)

export default app