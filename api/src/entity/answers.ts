import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from "typeorm";
import { Submission } from "./submission";




@Entity()
class Answers {
    @PrimaryGeneratedColumn()
    answer_id: number

    @Column()
    question_field: string

    @Column()
    question: string

    @Column()
    answer: string

    @ManyToOne(type => Submission, submission => submission.answers)
    submission: Submission

    constructor(answer_id: number, question_field: string, question: string, answer: string, submission: Submission) {
        this.answer_id = answer_id
        this.question_field = question_field
        this.question = question
        this.answer = answer
        this.submission = submission
    }
}


export { Answers }