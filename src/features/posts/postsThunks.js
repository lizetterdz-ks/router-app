import { createAsyncThunk } from "@reduxjs/toolkit";

export const getPosts = createAsyncThunk(
  'posts/fetchPosts',
  async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/?_page=1', )
      .then((res) => res.json());
    return res;
  }
);

export const postPosts = createAsyncThunk(
  'posts/addNewPost',
  async ({title, body, userId}) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: title,
        body: body,
        userId: userId,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    .then((res) => res.json());
    return res;
  }
);

export const deletePost = createAsyncThunk (
  'posts/deletePost',
  async ({id}) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'DELETE',
    })
    .then((res) => res.json());
    return res;
  }
);