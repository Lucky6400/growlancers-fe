import React from "react";
import "./MessageList.css";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { messages } from "./data";



const MessageList: React.FC = () => {
  return (
    <div className="message-list">
      {messages.map((msg) => (
        <div key={msg.id} className={`message-item ${msg.isUnread ? "unread" : ""}`}>
          <Avatar>
          <AvatarFallback>{(msg.name.split(" ")[0][0] + msg.name.split(' ')[1][1]).toUpperCase()}</AvatarFallback>
          </Avatar>
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
