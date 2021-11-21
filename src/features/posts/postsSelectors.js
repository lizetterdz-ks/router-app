export const selectPostsLoading = (state) => state.posts.isLoading;
export const selectAddPostsLoading = (state) => state.posts.isAddLoading;
export const selectPostsError = (state) => state.posts.hasError;
export const selectPosts = (state) => state.posts.posts;
export const selectNewPosts = (state) => state.posts.newPosts;
export const selectIsAdded = (state) => state.posts.isAdded;
export const selectAllPosts = (state) => state.posts.allPosts;
export const selectSpecificPost = (state) => {
  const { posts } = state;
  const foundPost = state.posts.posts.find((post) => post.id === posts.selectedPostId)
  return foundPost;
};

export const selectPostId = (state) => state.posts.selectedPostId;