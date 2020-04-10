import { Entity, PrimaryGeneratedColumn, ManyToOne, OneToMany, Column } from "typeorm";
import { Form } from './form'
import { Person } from "./person";
import { Answers } from "./answers";
import { Approvers } from "./approvers";


@Entity()
class Submission {
    @PrimaryGeneratedColumn('uuid')
    submission_id: string

    @ManyToOne(type => Form, form => form.submissions)
    form: Form

    @ManyToOne(type => Person, person => person.submissions)
    person: Person

    @OneToMany(type => Answers, answers => answers.submission)
    answers: Answers[]

    @OneToMany(type => Approvers, approvers => approvers.submission)
    approvers: Approvers[]

    @Column()
    overall_approved: boolean

    @Column()
    user_deleted: boolean

    constructor(submission_id: string, form: Form, person: Person, answers: Answers[], approvers: Approvers[], overall_approved: boolean, user_deleted: boolean) {
        this.submission_id = submission_id
        this.form = form
        this.person = person
        this.answers = answers
        this.approvers = approvers
        this.overall_approved = overall_approved
        this.user_deleted = user_deleted
    }
}

export { Submission }