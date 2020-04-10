import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Person } from "./person";


@Entity()
class Managers {
    @PrimaryGeneratedColumn()
    manager_unique_entry: string

    @ManyToOne(type => Person, person => person.my_managers)
    person: Person

    @ManyToOne(type => Person, person => person.manager_to)
    manager: Person

    @Column()
    approver_sequence: number

    constructor(manager_unique_entry: string, person: Person, manager: Person, approver_sequence: number) {
        this.manager_unique_entry = manager_unique_entry
        this.person = person
        this.manager = manager
        this.approver_sequence = approver_sequence
    }
}

export { Managers }