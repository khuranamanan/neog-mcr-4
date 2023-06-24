/* eslint-disable react/prop-types */
import { useContext } from "react";
import { FaChevronUp, FaChevronDown, FaBookmark } from "react-icons/fa";
import { FiBookmark } from "react-icons/fi";
import { ForumContext } from "../context/ForumContext";
import { useNavigate } from "react-router";
import { formatDate } from "../utils/formatData";

function PostCard({
  post,
  handleUpvote,
  handleDownvote,
  handleToggleBookmark,
  isDetailsPage = false,
}) {
  const {
    state: { forumData },
  } = useContext(ForumContext);
  const navigate = useNavigate();

  const {
    post: postContent,
    postDescription,
    postId,
    upvotes,
    downvotes,
    tags,
    isBookmarked,
    createdAt,
  } = post;

  const voteCount = upvotes - downvotes;

  return (
    <div className="border border-gray-300 rounded p-4 mb-4">
      <div className="flex gap-3">
        <div className="flex items-center flex-col justify-center">
          <button onClick={handleUpvote}>
            <FaChevronUp />
          </button>
          <span className="text-lg font-semibold">{voteCount}</span>
          <button onClick={handleDownvote}>
            <FaChevronDown />
          </button>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex gap-3 items-center">
            <div className="w-6 h-6">
              <img src={forumData.picUrl} alt="" />
            </div>
            <div className="text-sm text-gray-600 flex gap-2">
              <p>{`Posted By: ${forumData.name}`}</p>
              <p>{`Posted At: ${formatDate(createdAt)}`}</p>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">{postContent}</h2>
            <p className="text-gray-600 mb-4">{postDescription}</p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap mt-4">
        {tags.map((tag) => (
          <span
            key={tag}
            className="bg-gray-200 text-gray-600 px-2 py-1 rounded-full mr-2 mb-2"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex items-center mt-4">
        <button
          className={`${
            isBookmarked ? "bg-yellow-400" : "bg-gray-400"
          } text-white px-4 py-2 rounded mr-2 flex gap-2 items-center`}
          onClick={handleToggleBookmark}
        >
          {isBookmarked ? <FaBookmark /> : <FiBookmark />}
          {isBookmarked ? "Bookmarked" : "Bookmark"}
        </button>
        {!isDetailsPage && (
          <button
            className="bg-gray-400 text-white px-4 py-2 rounded mr-2"
            onClick={() => navigate(`/posts/${postId}`)}
          >
            Comment
          </button>
        )}
        <button className="bg-gray-400 text-white px-4 py-2 rounded mr-2">
          Share
        </button>
      </div>
    </div>
  );
}

export default PostCard;
