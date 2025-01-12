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
    },
    message: {
        currentMsg: Message
    }
}

interface MessageState {
    message: Message
}

interface MessageDetail {
    sender: string; // Either "Freelancer" or "Client"
    message: string; // The content of the message
    time: string;   // Timestamp of the message
}

interface Message {
    id: number;
    name: string;
    avatar: string;
    lastMessage: string;
    time: string;
    isUnread: boolean;
    messages: MessageDetail[]; // Array of messages for each conversation
}