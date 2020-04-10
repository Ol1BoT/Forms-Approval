data = [{
    "submission_id": 100,
    "submission_type": "Leave",
    "submitter_person_id": 1,
    "form": [
        {
            "question": "How many working days leave are you taking?",
            "answer": "5"
        },
        {
            "question": "Start Date",
            "answer": "07/04/2020"
        },
        {
            "question": "End Date",
            "answer": "14/04/2020"
        },
        {
            "question": "Reason for Leave?",
            "answer": "Wedding"
        }
    ],
    "approvers": [
        {
            "submission_id": 100,
            "position": 1,
            "person_id": 2,
            "approved": true,
            "approved_date": null
        },
        {
            "submission_id": 100,
            "position": 3,
            "person_id": 3,
            "approved": false,
            "approved_date": null
        },
        {
            "submission_id": 100,
            "position": 3,
            "person_id": 4,
            "approved": false,
            "approved_date": null
        }
    ]
},
{
    "submission_id": 101,
    "submission_type": "Leave",
    "submitter_person_id": 1,
    "form": [
        {
            "question": "How many working days leave are you taking?",
            "answer": "6"
        },
        {
            "question": "Start Date",
            "answer": "07/04/2020"
        },
        {
            "question": "End Date",
            "answer": "15/04/2020"
        },
        {
            "question": "Reason for Leave?",
            "answer": "Holiday"
        }
    ],
    "approvers": [
        {
            "submission_id": 101,
            "position": 1,
            "person_id": 2,
            "approved": false,
            "approved_date": null
        },
        {
            "submission_id": 101,
            "position": 3,
            "person_id": 3,
            "approved": false,
            "approved_date": null
        },
        {
            "submission_id": 101,
            "position": 3,
            "person_id": 4,
            "approved": false,
            "approved_date": null
        }
    ]
},
{
    "submission_id": 102,
    "submission_type": "Leave",
    "submitter_person_id": 1,
    "form": [
        {
            "question": "How many working days leave are you taking?",
            "answer": "6"
        },
        {
            "question": "Start Date",
            "answer": "07/04/2020"
        },
        {
            "question": "End Date",
            "answer": "15/04/2020"
        },
        {
            "question": "Reason for Leave?",
            "answer": "Holiday"
        }
    ],
    "approvers": [
        {
            "submission_id": 102,
            "position": 1,
            "person_id": 2,
            "approved": false,
            "approved_date": null
        },
        {
            "submission_id": 102,
            "position": 3,
            "person_id": 3,
            "approved": false,
            "approved_date": null
        },
        {
            "submission_id": 102,
            "position": 3,
            "person_id": 4,
            "approved": false,
            "approved_date": null
        }
    ]
},
{
    "submission_id": 103,
    "submission_type": "Leave",
    "submitter_person_id": 1,
    "form": [
        {
            "question": "How many working days leave are you taking?",
            "answer": "6"
        },
        {
            "question": "Start Date",
            "answer": "07/04/2020"
        },
        {
            "question": "End Date",
            "answer": "15/04/2020"
        },
        {
            "question": "Reason for Leave?",
            "answer": "Holiday"
        }
    ],
    "approvers": [
        {
            "submission_id": 103,
            "position": 1,
            "person_id": 2,
            "approved": true,
            "approved_date": null
        },
        {
            "submission_id": 103,
            "position": 3,
            "person_id": 3,
            "approved": true,
            "approved_date": null
        },
        {
            "submission_id": 103,
            "position": 3,
            "person_id": 4,
            "approved": false,
            "approved_date": null
        }
    ]
}
];


const me = 2

const main = (forMyApproval) => {
    const myAttention = forMyApproval.filter(sub => {
        let check = false
        sub.approvers.forEach((app, app_index, app_array) => {
            if (app.person_id === me && app.approved === false) {
                if (app.position === 1) {
                    console.log('Position')
                    check = true
                    return
                }
                if (app_array[app_index - 1].approved === true) {
                    console.log('Previous')
                    check = true
                    return
                }
                console.log('No Position, No Previous Unapproved')
                return false
            }
        })
        console.log(sub.submission_id, check)
        return check
    })

    console.log(myAttention)
}

main(data)