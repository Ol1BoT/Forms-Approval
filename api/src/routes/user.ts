import { Router, Request, Response } from 'express'


const userRouter = Router()

userRouter.route('/submissions')
    .get((req: Request, res: Response) => {
        res.send('get my submissions')
    })

userRouter.route('/submission')
    .get((req: Request, res: Response) => {
        res.send('Get Individual Submission')
    })
    .post((req: Request, res: Response) => {
        res.send("Create a New Submission")
    })
    .put((req: Request, res: Response) => {
        //Maybe not for regular users
        res.send('Update a Current Submission')
    })

userRouter.route('/')

export { userRouter }