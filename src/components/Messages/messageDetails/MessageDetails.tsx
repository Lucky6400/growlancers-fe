import { Button } from "@/components/ui/button";
import { addMessage } from "@/redux/reducers/messageSlice";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const MessageDetails: React.FC = () => {
  const dispatch = useDispatch();
  const currentMsg = useSelector((state: RootState) => state.message.currentMsg);

  const [newMessage, setNewMessage] = useState(""); // State to manage the input

  // Function to handle sending a message
  const sendMessage = () => {
    if (newMessage.trim()) {
      const message = {
        sender: "Freelancer",  // You can change this dynamically if needed
        message: newMessage,
        time: new Date().toLocaleTimeString(), // Get current time
      };

      // Dispatch the action to add the new message
      dispatch(addMessage(message));

      // Clear the input field after sending
      setNewMessage("");
    }
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md relative h-screen overflow-y-auto dark:bg-gray-800 dark:text-white">
      {currentMsg && currentMsg?.messages.map((msg, idx) => (
        <div
          key={msg.message + idx}
          className={`chat-message ${msg.sender === "Freelancer" ? "text-right" : "text-left"} mb-4`}
        >
          <div
            className={`inline-block px-4 py-2 rounded-lg ${
              msg.sender === "Freelancer" 
                ? "bg-green-500 dark:bg-green-700 text-white" 
                : "bg-gray-100 dark:bg-gray-600 text-gray-900"
            }`}
          >
            <p className="text-sm">{msg.message}</p>
            <span className="block text-xs text-gray-500 dark:text-gray-400">{msg.time}</span>
          </div>
        </div>
      ))}

      {/* Message Input Form */}
      <div className="mt-4 flex items-center gap-2">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message..."
          className="flex-grow px-2 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
        />
        <Button
          onClick={sendMessage}
          className="bg-green-500 hover:bg-green-700 dark:bg-green-600 dark:hover:bg-green-800 text-white"
        >
          Send
        </Button>
      </div>
    </div>
  );
};

export default MessageDetails;
