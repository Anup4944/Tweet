import { useRouter } from "next/router";
import { FaFeather } from "react-icons/fa";

const SideBarTweetButton = () => {
  const router = useRouter();
  return (
    <div onClick={() => router.push("/")}>
      <div className="mt-6 lg:hidden rounded-full h-14 w-14 p-4 flex items-center justify-center bg-sky-500 hover:bg-opacity-80 transition cursor-pointer">
        <FaFeather />
      </div>
    </div>
  );
};

export default SideBarTweetButton;
