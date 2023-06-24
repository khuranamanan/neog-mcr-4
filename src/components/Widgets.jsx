import { useContext } from "react";
import { ForumContext } from "../context/ForumContext";
import { useLocation } from "react-router";

function Widgets() {
  const { dispatch } = useContext(ForumContext);
  const location = useLocation();
  console.log(location);

  const handleSortByDate = () => {
    dispatch({ type: "SET_SORT", payload: "SORT_BY_DATE" });
  };

  const handleSortByUpvotes = () => {
    dispatch({ type: "SET_SORT", payload: "SORT_BY_UPVOTES" });
  };

  return (
    <div className=" w-[24rem] p-4 border-l border-gray-300 h-full">
      {location.pathname === "/" && (
        <div className="flex justify-end mb-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2"
            onClick={handleSortByDate}
          >
            Sort by Date
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4"
            onClick={handleSortByUpvotes}
          >
            Sort by Upvotes
          </button>
        </div>
      )}
    </div>
  );
}

export default Widgets;
