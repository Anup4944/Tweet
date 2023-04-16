import React from "react";
import { BsHouseFill, BsBellFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import SideBarLogo from "./SideBarLogo";
import SideBarItem from "./SideBarItem";
import SideBarTweetButton from "./SideBarTweetButton";
import useCurrentUser from "@/hooks/useCurrentUser";
import { signOut } from "next-auth/react";

const Sidebar = () => {
  const { data: currentUser } = useCurrentUser();

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
      auth: true,
    },
    {
      label: "Profile",
      href: "/users/123",
      icons: FaUser,
      auth: true,
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
              auth={icon.auth}
            />
          ))}
          {currentUser && (
            <SideBarItem
              onClick={() => signOut()}
              icon={BiLogOut}
              label="Logout"
            />
          )}

          <SideBarTweetButton />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
