interface Option {
    label: string;
    value: string;
}

interface RootState {
    filter: {
        "jobType": string,
        "workExp": string,
        "location": string,
        "salaryType": string,
        "salaryRange": number
    }
}