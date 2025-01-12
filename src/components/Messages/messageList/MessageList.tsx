import React from "react";
import "./MessageList.css";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { messages } from "./data";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "@/redux/reducers/messageSlice";

const MessageList: React.FC = () => {
  const dispatch = useDispatch();
  const currentMsg = useSelector((state: RootState) => state.message.currentMsg);

  return (
    <div className="message-list">
      {messages.map((msg) => (
        <div
          key={msg.id}
          onClick={() => dispatch(setUser(msg))}
          className={`flex items-start justify-between p-2 rounded-xl cursor-pointer transition-all ease-in-out ${
            currentMsg && msg.id === currentMsg.id
              ? "bg-blue-200 dark:bg-blue-600"
              : "bg-white dark:bg-gray-800"
          }`}
        >
          <div className="flex gap-2">
            <Avatar>
              <AvatarFallback>
                {(msg.name.split(" ")[0][0] + msg.name.split(" ")[1][1]).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div className="text-gray-600 dark:text-gray-300">
              <h4>{msg.name}</h4>
              <p className="text-sm">{msg.lastMessage}</p>
            </div>
          </div>
          <span className="whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{msg.time}</span>
        </div>
      ))}
    </div>
  );
};

export default MessageList;
