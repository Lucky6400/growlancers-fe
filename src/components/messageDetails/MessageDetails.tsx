import React from "react";
import "./MessageDetails.css";

interface ChatMessage {
  id: number;
  sender: string;
  content: string;
  time: string;
}

const chatMessages: ChatMessage[] = [
  { id: 1, sender: "Rucas Royal", content: "Is this jacket waterproof?", time: "08:24 PM" },
  { id: 2, sender: "You", content: "Yes, it's both waterproof and warm.", time: "08:25 PM" },
  { id: 3, sender: "Rucas Royal", content: "What kind of insulation does it have?", time: "08:26 PM" },
];

const MessageDetails: React.FC = () => {
  return (
    <div className="message-details">
      {chatMessages.map((msg) => (
        <div key={msg.id} className={`chat-message ${msg.sender === "You" ? "outgoing" : "incoming"}`}>
          <p className="message-content">{msg.content}</p>
          <span className="message-time">{msg.time}</span>
        </div>
      ))}
    </div>
  );
};

export default MessageDetails;
