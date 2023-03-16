import UserRoutes from '../routes/user.routes'

const loadRoutes = (app: any) => {
    app.use("/api", UserRoutes)
}

export default loadRoutes