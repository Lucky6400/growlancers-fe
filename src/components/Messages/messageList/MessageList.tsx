import React from "react";
import "./MessageList.css";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { messages } from "./data";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "@/redux/reducers/messageSlice";



const MessageList: React.FC = () => {
  const dispatch = useDispatch()
  const currentMsg = useSelector((state: RootState) => state.message.currentMsg);
  return (
    <div className="message-list">
      {messages.map((msg) => (
        <div key={msg.id} onClick={() => dispatch(setUser(msg))} className={`flex items-start justify-between p-2  rounded-xl cursor-pointer ${msg.id === currentMsg.id ? "bg-blue-200" : "bg-white"}`}>
          <div className="flex gap-2">

          <Avatar>
          <AvatarFallback>{(msg.name.split(" ")[0][0] + msg.name.split(' ')[1][1]).toUpperCase()}</AvatarFallback>
          </Avatar>
          <div className="">
            <h4>{msg.name}</h4>
            <p className={'text-gray-600 text-sm'}>{msg.lastMessage}</p>
          </div>
          </div>
          <span className="whitespace-nowrap text-sm text-gray-500">{msg.time}</span>
        </div>
      ))}
    </div>
  );
};

export default MessageList;
