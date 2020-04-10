import { Router, Request, Response } from 'express'


const adminRouter = Router()

adminRouter.route('/submissions')
    .get((req: Request, res: Response) => {
        //If User ID supplied get User submissions
        //If No User ID supplied, get all submissions between two dates
        if (req.params.userID) {

        }

        if (req.params.startDate && req.params.endDate) {

        }
    })

adminRouter.route('/submission/:submission_id')
    .get((req: Request, res: Response) => {
        if (req.params.submission_id) {
            res.send('View the individual submission')
        }
        res.send('Not Found')
    })

adminRouter.route('/people')
    .get((req: Request, res: Response) => {
        res.send('View All People')
    })