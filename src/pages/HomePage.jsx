import { useContext } from "react";
import { ForumContext } from "../context/ForumContext";
import PostCard from "../components/PostCard";

function HomePage() {
  const { state, dispatch } = useContext(ForumContext);
  const { forumData, sortType } = state;

  let heading = "Posts";
  if (sortType === "SORT_BY_DATE") {
    heading = "Latest Posts";
  } else if (sortType === "SORT_BY_UPVOTES") {
    heading = "Most Upvoted Posts";
  }

  function sortPosts(posts) {
    if (sortType === "SORT_BY_DATE") {
      return posts.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
    } else if (sortType === "SORT_BY_UPVOTES") {
      return posts.sort((a, b) => {
        const countB = b.upvotes - b.downvotes;
        const countA = a.upvotes - a.downvotes;
        return countB - countA;
      });
    } else {
      return posts;
    }
  }

  const sortedPosts = sortPosts(forumData.posts);

  return (
    <div className="pb-[64px]">
      <p className="text-2xl font-bold p-2">{heading}</p>
      {sortedPosts.map((post) => (
        <PostCard
          key={post.postId}
          post={post}
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
      ))}
    </div>
  );
}

export default HomePage;
