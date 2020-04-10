import { Router, Request, Response } from 'express'

const managerRouter = Router()


managerRouter.route('/my-attention')
    .get((req: Request, res: Response) => {
        res.send('Get Submissions that require the Managers attention')

    })

managerRouter.route('/history')
    .get((req: Request, res: Response) => {
        res.send('Get my Approval History')
    })

managerRouter.route('/submission/:submission_id')
    .get((req: Request, res: Response) => {
        res.send('Get the individual submissions')
    })

managerRouter.route('/approver/:approvers_primary')
    .put((req: Request, res: Response) => {
        //If the manager_id == the logged in user_id then let them update the approved flag
        res.send('Update the approved status and approved status time')

    })