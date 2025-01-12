import React from "react";
import SearchBar from "@/components/SearchBar/SearchBar";
import MessageList from "@/components/messageList/MessageList";
import MessageDetails from "@/components/messageDetails/MessageDetails";
import "./MessagingPage.css";

const MessagingPage: React.FC = () => {
  return (
    <div className="messaging-page">
      <aside className="message-list-container">
        <SearchBar />
        <MessageList />
      </aside>
      <main className="message-details-container">
        <MessageDetails />
      </main>
    </div>
  );
};

export default MessagingPage;
