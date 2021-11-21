import { createSlice } from '@reduxjs/toolkit';
import { getPosts, postPosts, deletePost } from './postsThunks'

const initialState = {
  posts: [],
  newPosts: [],
  allPosts: [],
  selectedPostId: '',
  isLoading: false,
  isAddLoading: false,
  isAdded: false,
  deletedPost: {},
  isDeleteLoading: false,
  hasError: false,
};

export const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setSelectedPost: (state, action) => {
            state.selectedPostId = action.payload;
        },
        setIsAdded: (state) => {
            state.isAdded = false;
        },
    },
    extraReducers: (builder) => 
        builder
        .addCase(getPosts.pending, (state) => {
            state.isLoading = true;
            state.hasError = false;
        })
        .addCase(getPosts.fulfilled, (state, action) => {
           state.posts = [...action.payload];
           state.isLoading = false; 
           state.allPosts = [...state.posts, ...state.newPosts];
        })
        .addCase(getPosts.rejected, (state)=> {
            state.isLoading = false;
            state.hasError = true;
        })
        .addCase(postPosts.pending, (state) => {
            state.isAddLoading = true;
            state.hasError = false;
            state.isAdded = false;
        })
        .addCase(postPosts.fulfilled, (state, payload) => {
           state.newPosts = [...state.newPosts, payload.payload];
           state.isAddLoading = false; 
           state.isAdded = true;
        })
        .addCase(postPosts.rejected, (state)=> {
            state.isAddLoading = false;
            state.hasError = true;
            state.isAdded = false;
        })
        .addCase(deletePost.pending, (state) => {
            state.isDeleteLoading = true;
            state.hasError = false;
        })
        .addCase(deletePost.fulfilled, (state, payload) => {
           state.deletedPost = payload.payload;
           state.allPosts = state.allPosts.filter((post) => state.selectedPostId !== post.id)
           state.isDeleteLoading = false; 
        })
        .addCase(deletePost.rejected, (state)=> {
            state.isDeleteLoading = false;
            state.hasError = true;
        })
});

export const { setSelectedPost, setIsAdded } = postSlice.actions;

export default postSlice.reducer;