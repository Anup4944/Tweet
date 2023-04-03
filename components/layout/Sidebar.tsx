import React from "react";
import { BsHouseFill, BsBellFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import SideBarLogo from "./SideBarLogo";
import SideBarItem from "./SideBarItem";
import SideBarTweetButton from "./SideBarTweetButton";

const Sidebar = () => {
  const icons = [
    {
      label: "Home",
      href: "/",
      icons: BsHouseFill,
    },
    {
      label: "Notifications",
      href: "/notifications",
      icons: BsBellFill,
    },
    {
      label: "Profile",
      href: "/users/123",
      icons: FaUser,
    },
  ];
  return (
    <div className="col-span-1 h-full pr-4 md:pr-4">
      <div className="flex flex-col items-end">
        <div className="space-y-2 lg:w-[230px]">
          <SideBarLogo />
          {icons.map((icon) => (
            <SideBarItem
              key={icon.label}
              href={icon.href}
              label={icon.label}
              icon={icon.icons}
            />
          ))}
          <SideBarItem onClick={() => {}} icon={BiLogOut} label="Logout" />
          <SideBarTweetButton />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
