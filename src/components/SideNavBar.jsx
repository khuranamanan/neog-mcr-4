import { NavLink } from "react-router-dom";
import { AiOutlineHome, AiOutlineRocket } from "react-icons/ai";
import { BiBookmark } from "react-icons/bi";
import { FaRegUserCircle } from "react-icons/fa";
import { useContext } from "react";
import { ForumContext } from "../context/ForumContext";

function SideNavBar() {
  const {
    state: { forumData },
  } = useContext(ForumContext);

  return (
    <div className="relative z-50 font-inter font-medium flex px-2 py-2 gap-10 items-center sm:px-3 sm:py-4 sm:flex-col lg:items-start sm:h-full lg:w-[16rem]">
      <nav className="text-xl flex gap-4 w-full justify-around items-center sm:justify-normal sm:flex-col lg:items-start">
        <NavLink to="/" className="navlink">
          <AiOutlineHome />
          <span className="hidden lg:block items-center">Home</span>
        </NavLink>
        <NavLink className="navlink">
          <AiOutlineRocket />
          <span className="hidden lg:block items-center">Explore</span>
        </NavLink>
        <NavLink className="navlink">
          <BiBookmark />
          <span className="hidden lg:block items-center">Bookmarks</span>
        </NavLink>
        <NavLink className="navlink">
          <FaRegUserCircle />
          <span className="hidden lg:block items-center">Profile</span>
        </NavLink>
      </nav>

      <div className="hidden lg:flex lg:items-center gap-4 px-3 py-3 rounded-full hover:bg-gray-400 lg:w-full lg:mt-auto cursor-pointer">
        <div className="w-6 h-6">
          <img src={forumData.picUrl} alt="" />
        </div>

        <div>
          <p>{`${forumData.name}`}</p>
          <p className="text-xs text-darkGray">{`@${forumData.username}`}</p>
        </div>
      </div>
    </div>
  );
}

export default SideNavBar;
