import React from "react";
import SearchInput from "./SearchInput";
import Conversations from "./Conversations";
import LogoutBtn from "./LogoutBtn";

const Sidebar = () => {
  return (
    <div className="flex flex-col p-2 border-r">
      <SearchInput />
      <div className=" bg-sky-400 mt-4  w-full"></div>
      <Conversations />
      <LogoutBtn />
    </div>
  );
};

export default Sidebar;
