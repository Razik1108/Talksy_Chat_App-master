import React, { useContext } from "react";
import ChatBox from "../Components/ChatBox";
import SideBar from "../Components/SideBar";
import RightSide from "../Components/RightSide";
import { ChatContext } from "../../context/ChatContext";

const Homepage = () => {
  const { selectedUser } = useContext(ChatContext);

  return (
    <div className="border w-full h-screen sm:px-[15%] sm:py-[5%]">
      <div
        className={`grid grid-cols-1 relative h-[100%] border-2 border-gray-600 rounded-2xl backdrop-blur-xl overflow-hidden ${
          selectedUser
            ? "md:grid-cols-[1fr_1.5fr_1fr] xl:grid-cols-[1fr_2fr_1fr]"
            : "md:grid-cols-2"
        }`}
      >
        <SideBar />
        <ChatBox />
        <RightSide />
      </div>
    </div>
  );
};

export default Homepage;
