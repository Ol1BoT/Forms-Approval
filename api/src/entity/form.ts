import { Entity, PrimaryGeneratedColumn, OneToMany, Column } from "typeorm";
import { Submission } from "./submission";



@Entity()
class Form {
    @PrimaryGeneratedColumn()
    form_id: number

    @Column()
    form_name: string

    @OneToMany(type => Submission, submission => submission.form)
    submissions: Submission[]



    constructor(form_id: number, form_name: string, submissions: Submission[]) {
        this.form_id = form_id
        this.form_name = form_name
        this.submissions = submissions

    }
}

export { Form }

