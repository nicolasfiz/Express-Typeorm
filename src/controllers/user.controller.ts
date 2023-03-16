import { Request, Response } from "express"

const createUser = (_req: Request, res: Response) => {
    res.send('hello world')
}

export { createUser }