import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LayoutContainer from '../components/LayoutContainer';
import { Button, Typography, Card, CardActions, CardContent, Grid, Alert,
  AlertTitle, CircularProgress, } from '@mui/material';
import { deletePost, getPosts } from '../features/posts/postsThunks';
import { setSelectedPost } from '../features/posts/postsSlice';
import { selectPostsLoading, selectPostsError, selectAllPosts } from '../features/posts/postsSelectors';
import { useDispatch, useSelector } from 'react-redux';
import { setAuth } from '../features/auth/authSlice';
import { selectIsAuthenticated } from '../features/auth/authSelectors';

const PostDashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loading = useSelector(selectPostsLoading);
  const error = useSelector(selectPostsError);
  const isAuth = useSelector(selectIsAuthenticated);
  const allPosts = useSelector(selectAllPosts);

  useEffect(() => {
    dispatch(getPosts());
  },[dispatch]);

  const handleSelectPost = (id) => {
    dispatch(setSelectedPost(id));
    navigate(`/posts/${id}`)
  }

  const refetchPosts = () => {
    dispatch(getPosts());
  }

  const handleReturnToLogin = () => {
    if (isAuth){
      dispatch(setAuth());
    }
    navigate('/login');
  };

  const handleCreate = () => {
    navigate('/create');
  }

  const handleDeletePost = (id) => {
    if (!isAuth) {
      navigate('/login');
    }
    dispatch(setSelectedPost(id));
    dispatch(deletePost({id}));
  }

  if (error) {
    return (
      <Alert severity='error'>
        <AlertTitle>Error</AlertTitle>
        There was an error fetching the information!
        <div>
          <Button variant='outlined' onClick={refetchPosts}>
            Click to refetch
          </Button>
        </div>
      </Alert>
    )
  }

  return (
    <LayoutContainer>
      {
        loading ?
        <>
          <h2>Loading...</h2>
          <CircularProgress />
        </>
        :
        <>
          <Button variant="contained" color="secondary" onClick={handleCreate}>
            Create
          </Button>
          <Grid container spacing={2} wrap='wrap' sx={{display: 'flex', justifyContent: 'center', padding: 2}}>
          {allPosts.map((post) => (
            <Grid item xs='auto'  key={post.id} sx={{padding:1, margin: 0}}>
              <Card sx={{width: 345, height: 250, padding: 2}}>
                <CardContent>
                  <Typography component="h2" variant="h5">
                    {post.title}
                  </Typography>

                  <Typography variant="subtitle1" color="text.secondary">
                    By: User {post.userId}
                  </Typography>
                  
                  <Typography variant="subtitle1" paragraph sx={{width: 300}} noWrap={true} >
                    {post.body}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" variant="contained" onClick={() => {
                    handleSelectPost(post.id)
                  }}>
                    Keep reading
                  </Button>
                  <Button size="small"  onClick={() => {
                    handleDeletePost(post.id)
                  }}>
                    Remove
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
          </Grid>
        </>
      }
      <Button
        style={{ marginTop: '2rem' }}
        color='secondary'
        onClick={handleReturnToLogin}
      >
        Return to login
      </Button>
    </LayoutContainer>
  );
};

export default PostDashboard;