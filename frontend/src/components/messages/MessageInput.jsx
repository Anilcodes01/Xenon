import React, { useState } from "react";
import { FiSend } from "react-icons/fi";
import useSendMessage from "../../hooks/useSendMesssage";

const MessageInput = () => {
  const [message, setMessage] = useState("");

  const { loading, sendMessage } = useSendMessage();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!message) return;

    await sendMessage(message);
    setMessage("");
  };
  return (
    <form onSubmit={handleSubmit} className="px-4 my-3">
      <div className="w-full relative">
        <input
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          type="text"
          placeholder="Send a message..."
          className="border text-sm rounded-lg block w-full p-2 text-white bg-gray-700"
        />
        <button
          type="submit"
          className=" absolute inset-y-0 end-0 flex items-center pe-3"
        >
          {loading ? (
            <div className="loading loading-spinner"> </div>
          ) : (
            <FiSend />
          )}
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
