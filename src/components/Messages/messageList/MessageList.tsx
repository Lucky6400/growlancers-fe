import React from "react";
import "./MessageList.css";

interface Message {
  id: number;
  name: string;
  avatar: string;
  lastMessage: string;
  time: string;
  isUnread: boolean;
}

const messages: Message[] = [
  { id: 1, name: "Rucas Royal", avatar: "/path/to/avatar1.png", lastMessage: "Is this jacket waterproof?", time: "01:09 am", isUnread: true },
  { id: 2, name: "Leslie Alexander", avatar: "/path/to/avatar2.png", lastMessage: "Do you have new arrivals?", time: "01:08 am", isUnread: false },
  // Add more messages
];

const MessageList: React.FC = () => {
  return (
    <div className="message-list">
      {messages.map((msg) => (
        <div key={msg.id} className={`message-item ${msg.isUnread ? "unread" : ""}`}>
          <img src={msg.avatar} alt={`${msg.name}'s avatar`} className="avatar" />
          <div className="message-content">
            <h4>{msg.name}</h4>
            <p>{msg.lastMessage}</p>
          </div>
          <span className="time">{msg.time}</span>
        </div>
      ))}
    </div>
  );
};

export default MessageList;
