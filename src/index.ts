import "reflect-metadata"
import app from './config/app'
import { AppDataSource } from './config/db'

const PORT = 3000

const main = async () => {
    try {
        await AppDataSource.initialize()
        app.listen(PORT, () => {
            console.log(`🚀 Server running on port ${PORT}`)
        })
    } catch (error) {
        console.log(error)
    }
}

main()


app.get('/ping', (_req, res) => {
    console.log('someone ping here!!')
    res.send('pong!! 🏓')
})

