import { forumData } from "../data/data";

export const initialState = {
  forumData: forumData,
  sortType: "",
};

export const forumReducer = (state, action) => {
  switch (action.type) {
    case "UPVOTE_POST":
      return {
        ...state,
        forumData: {
          ...state.forumData,
          posts: state.forumData.posts.map((post) =>
            post.postId === action.postId
              ? { ...post, upvotes: post.upvotes + 1 }
              : post
          ),
        },
      };
    case "DOWNVOTE_POST":
      return {
        ...state,
        forumData: {
          ...state.forumData,
          posts: state.forumData.posts.map((post) =>
            post.postId === action.postId
              ? { ...post, upvotes: post.upvotes - 1 }
              : post
          ),
        },
      };
    case "TOGGLE_BOOKMARK":
      return {
        ...state,
        forumData: {
          ...state.forumData,
          posts: state.forumData.posts.map((post) =>
            post.postId === action.postId
              ? { ...post, isBookmarked: !post.isBookmarked }
              : post
          ),
        },
      };

    case "SET_SORT": {
      return {
        ...state,
        sortType: action.payload,
      };
    }

    default:
      return state;
  }
};
