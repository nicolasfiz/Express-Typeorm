import express from "express";
import helmet from "helmet";
import cors from "cors"

const app = express()
app.use(express.json())
app.use(helmet())
app.use(cors())

const PORT = 3000

app.get('/ping', (_req, res) => {
    console.log('someone ping here!!')
    res.send('pong!! 🏓')
})

app.listen(PORT, () =>{
    console.log(`🚀 Server running on port ${PORT}`)
})