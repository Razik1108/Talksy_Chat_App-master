import React, { useContext, useEffect, useRef, useState } from "react";
import assets, { messagedata } from "../assets/assets";
import { formatMsgTime } from "../lib/Utils";
import { ChatContext } from "../../context/ChatContext";
import { AuthContext } from "../../context/AuthContext";
import EmojiPicker from "emoji-picker-react";

const ChatBox = () => {
  const { messages, selectedUser, setSelectedUser, sendMessage, getMessages } =
    useContext(ChatContext);
  const { authUser, onlineUsers } = useContext(AuthContext);

  const scrollEnd = useRef();

  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  // const [input, setInput] = useState("");

  const [input, setInput] = useState("");

  const handleEmojiClick = (emojiData) => {
    setInput((prevInput) => prevInput + emojiData.emoji);
  };

  //handle sending a message
  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (input.trim() === "") return null;
    await sendMessage({ text: input.trim() });
    setInput("");
    setShowEmojiPicker(false);
  };

  //handle sending an image
  const handleSendImage = async (e) => {
    const file = e.target.files[0];
    if (!file || !file.type.startsWith("image/")) {
      toast.error("Select an image file");
      return;
    }
    const reader = new FileReader();
    reader.onloadend = async () => {
      await sendMessage({ image: reader.result });
      e.target.value = "";
    };
    reader.readAsDataURL(file);
  };

  useEffect(() => {
    if (selectedUser) {
      getMessages(selectedUser._id);
    }
  }, [selectedUser]);

  useEffect(() => {
    if (scrollEnd.current && messages) {
      scrollEnd.current.scrollIntoView({ behaviour: "smooth" });
    }
  }, [messages]);

  return selectedUser ? (
    <div className="h-full overflow-scroll relative backdrop-blur-lg">
      {/* ------ header part------*/}

      <div className="flex items-center gap-3 py-3 mx-4 border-b border-stone-500">
        <img
          src={selectedUser.profilePic || assets.avatar_icon}
          alt="profilepic"
          className="w-8 rounded-full"
        />
        <p className="flex-1 text-lg text-white flex items-center gap-2">
          {selectedUser.fullName}
          {onlineUsers.includes(selectedUser._id) && (
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
          )}
        </p>
        <img
          onClick={() => setSelectedUser(null)}
          src={assets.send_icon}
          alt=""
          className="md:hidden max-w-7"
        />
        <img src={assets.info_icon} alt="" className="max-md:hidden max-w-5" />
      </div>

      {/* // -------Chat Area------ */}

      <div className="flex flex-col overflow-y-scroll p-3 pb-6 h-[calc(100%-120px)]">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex items-end gap-2 justify-end ${
              msg.senderId !== authUser._id && "flex-row-reverse"
            }`}
          >
            {/* {msg.image ? ( */}
            {msg.image && (
              <img
                src={msg.image}
                alt="pics"
                className="max-w-[230px] border border-gray-700 rounded-lg overflow-hidden mb-8"
              />
              // ):  (
            )}

            {msg.text && (
              <p
                className={`p-2 max-w-[200px] md:text-sm font-light rounded-lg mb-8 break-all bg-violet-500/30 text-white ${
                  msg.senderId === authUser._id
                    ? "rounded-br-none"
                    : "rounded-bl-none"
                }`}
              >
                {msg.text}
              </p>
            )}
            <div className="text-center text-xs">
              <img
                src={
                  msg.senderId === authUser._id
                    ? authUser.profilePic || assets.avatar_icon
                    : selectedUser.profilePic || assets.avatar_icon
                }
                alt="pics"
                className="w-7 rounded-full"
              />
              <p className="text-gray-500">{formatMsgTime(msg.createdAt)}</p>
            </div>
          </div>
        ))}
        <div ref={scrollEnd}></div>
      </div>

      {/*...... BOTTOM AREA ......*/}

      <div className="absolute bottom-0 left-0 right-0 flex items-center gap-3 p-3">
        <div className="flex-1 flex items-center bg-gray-600/40 px-3 rounded-full">
          <div className="relative flex items-center gap-2">
            {/* 👇 Toggle Button */}
            <button onClick={() => setShowEmojiPicker((prev) => !prev)}>
              😊
            </button>

            {/* 👇 Emoji Picker */}
            {showEmojiPicker && (
              <div className="absolute bottom-14 left-0 z-50">
                <EmojiPicker onEmojiClick={handleEmojiClick} theme="dark" />
              </div>
            )}
          </div>
          <input
            onChange={(e) => setInput(e.target.value)}
            value={input}
            onKeyDown={(e) => (e.key === "Enter" ? handleSendMessage(e) : null)}
            type="text"
            placeholder="Send a message"
            className="flex-1 text-sm p-3 border-none rounded-lg outline-none text-white placeholder-gray-400 bg-transparent"
          />
          <input
            onChange={handleSendImage}
            type="file"
            id="image"
            accept="image/png, image/jpg"
            hidden
          />
          <label htmlFor="image">
            <img
              src={assets.gallery_icon}
              alt="gallery"
              className="w-5 mr-2 cursor-pointer"
            />
          </label>
        </div>
        <img
          onClick={handleSendMessage}
          src={assets.send_icon}
          alt="sendbtn"
          className="w-9 h-9 bg-gradient-to-r from-purple-400 to-violet-600 rounded-full p-1 cursor-pointer"
        />
      </div>
    </div>
  ) : (
    <div className="flex flex-col items-center justify-center gap-2 text-gray-500 bg-white/10 max-md:hidden">
      <img src={assets.chat} alt="pics" className="max-w-16" />
      <p className="text-lg font-medium text-white">Chat anytime, anywhere </p>
    </div>
  );
};

export default ChatBox;
