import React from "react";
import { BsHouseFill, BsBellFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import SideBarLogo from "./SideBarLogo";

const Sidebar = () => {
  const icons = [
    {
      labek: "Home",
      href: "/",
      icons: BsHouseFill,
    },
    {
      labek: "Notifications",
      href: "/notifications",
      icons: BsBellFill,
    },
    {
      labek: "Profile",
      href: "/users/123",
      icons: FaUser,
    },
  ];
  return (
    <div className="col-span-1 h-full pr-4 md:pr-4">
      <div className="flex flex-col items-end">
        <div className="space-y-2 lg:w-[230px]">
          <SideBarLogo />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
