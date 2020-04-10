import { Entity, ManyToOne, PrimaryGeneratedColumn, Column } from "typeorm";
import { Submission } from "./submission";


@Entity()
class Approvers {
    @PrimaryGeneratedColumn()
    approvers_primary: number

    @Column()
    person_id: string

    @Column()
    approver_sequence: number

    @Column()
    approved: string

    @Column()
    approved_date: string

    @ManyToOne(type => Submission, submission => submission.approvers)
    submission: Submission

    constructor(approvers_primary: number, person_id: string, approver_sequence: number, approved: string, approved_date: string, submission: Submission) {
        this.approvers_primary = approvers_primary
        this.person_id = person_id
        this.approver_sequence = approver_sequence
        this.approved = approved
        this.approved_date = approved_date
        this.submission = submission
    }
}

export { Approvers }