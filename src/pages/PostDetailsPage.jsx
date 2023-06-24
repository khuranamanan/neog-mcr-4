import { useContext } from "react";
import { useNavigate, useParams } from "react-router";
import { ForumContext } from "../context/ForumContext";
import PostCard from "../components/PostCard";
import { formatDate } from "../utils/formatData";
import { AiOutlineArrowLeft } from "react-icons/ai";

function PostDetailsPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const {
    state: { forumData },
    dispatch,
  } = useContext(ForumContext);
  const { posts } = forumData;

  const post = posts.find((post) => post.postId === id);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <div className="p-2 flex gap-4 mb-2">
        <button
          className="cursor-pointer flex gap-1 px-3 py-2 bg-blue-500 text-white items-center rounded-lg hover:bg-blue-600"
          onClick={() => navigate(-1)}
        >
          <AiOutlineArrowLeft />
          Go Back
        </button>
        <p className="text-2xl font-bold">Post</p>
      </div>
      <PostCard
        post={post}
        isDetailsPage
        handleUpvote={() =>
          dispatch({ type: "UPVOTE_POST", postId: post.postId })
        }
        handleDownvote={() =>
          dispatch({ type: "DOWNVOTE_POST", postId: post.postId })
        }
        handleToggleBookmark={() =>
          dispatch({ type: "TOGGLE_BOOKMARK", postId: post.postId })
        }
      />

      <h3 className="text-xl font-semibold mt-4">Comments:</h3>
      {post.comments.length === 0 ? (
        <p>No comments yet.</p>
      ) : (
        <ul className="mt-2">
          {post.comments.map((comment) => (
            <li key={comment.commentId} className="flex items-start p-3 mb-4">
              <img
                src={comment.picUrl}
                alt=""
                className="w-10 h-10 rounded-full mr-4"
              />
              <div className="flex flex-col gap-3">
                <div className="flex gap-3 text-gray-500 text-xs">
                  <p>Posted By: {comment.username}</p>
                  <p>Posted At: {formatDate(comment.createdAt)}</p>
                </div>

                <p className="text-gray-600">{comment.comment}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default PostDetailsPage;
