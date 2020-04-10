import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'
import { Submission } from './submission'
import { Managers } from './manager'

@Entity({ schema: 'forms' })
class Person {

    @PrimaryGeneratedColumn('uuid')
    system_id: string

    @Column()
    company_id: string

    @Column()
    first_name: string

    @Column()
    last_name: string

    @Column()
    job_department: string

    @Column()
    job_category: string

    @OneToMany(type => Managers, manager => manager.person)
    my_managers: Managers[]

    @OneToMany(type => Managers, manager => manager.manager)
    manager_to: Managers[]

    @OneToMany(type => Submission, submission => submission.person)
    submissions: Submission[]

    constructor(system_id: string, company_id: string, first_name: string, last_name: string, job_department: string, job_category: string,
        my_managers: Managers[], manager_to: Managers[], submissions: Submission[]) {
        this.system_id = system_id
        this.company_id = company_id
        this.first_name = first_name
        this.last_name = last_name
        this.job_department = job_department
        this.job_category = job_category
        this.my_managers = my_managers
        this.manager_to = manager_to
        this.submissions = submissions
    }
}

export { Person }