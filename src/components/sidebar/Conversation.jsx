import React from "react";
import useConversation from "../../zustand/useConversation";
import { useSocketContext } from "../../context/SocketContext";

const Conversation = ({ conversation, lastIndex }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  const isSelected = selectedConversation?._id === conversation._id;

  const { onlineUser } = useSocketContext();
  const isOnline = onlineUser.includes(conversation._id);
  return (
    <>
      <div
        className={`flex gap-2 items-center hover:bg-indigo-700 rounded p-2 py-1 cursor-pointer 
    ${isSelected ? "bg-indigo-700" : ""}`}
        onClick={() => setSelectedConversation(conversation)}
      >
        <div className={`avatar  ${isOnline ? "online" : ""}`}>
          <div className="w-12 rounded-full">
            <img src={conversation.profilePic} alt="user avatar" />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font bold text-gray-200">{conversation.username}</p>
            <span className="text-xl"></span>
          </div>
        </div>
      </div>
      {!lastIndex && <div className="divider my-0 py-0 h-1" />}
    </>
  );
};

export default Conversation;
