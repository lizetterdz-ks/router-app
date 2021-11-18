import React, { useState, useMemo, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import LayoutContainer from '../components/LayoutContainer';
import { Box, Button, Typography, Card, CardActions, CardContent, Grid } from '@mui/material';

const PostDashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPage = useMemo(
    () => new URLSearchParams(location.search).get('page'),
    [location.search],
  );

  const [page, setPage] = useState(currentPage ? Number(currentPage) : 1);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts () {
      let res = await fetch(`https://jsonplaceholder.typicode.com/posts/?_page=${page}`)
      let data = await res.json();
      setPosts(data);
      setLoading(false);
    }
    setLoading(true);
    fetchPosts();
  }, [page])

  const handleReturnToLogin = () => {
    navigate('/login');
  };

  const handleKeepReading = (id) => {
    navigate(`/posts/${id}`)
  }

  const changePage = (newPage) => {
    if (newPage > posts.length || newPage === 0) return;
    navigate(`${location.pathname}?page=${newPage}`, { replace: true })
    setPage(newPage);
  };

  return (
    <LayoutContainer>
      {
        loading ?
        <>
          <h2>Loading...</h2>
        </>
        :
        <>
          <Grid container spacing={2} wrap='wrap' sx={{display: 'flex', justifyContent: 'center', padding: 2}}>
          {posts.map((post) => (
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
                    handleKeepReading(post.id)
                  }}>
                    Keep reading
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            // <div style={{ marginBottom: '1rem' }}>
            //   <Link to={`/posts/${post.id}`}>
            //     Let's check a {post.title}
            //   </Link>
            // </div>
          ))}
          </Grid>
        </>
      }
      <Box
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '2rem',
        }}
      >
        <Button
          size='small'
          color='primary'
          onClick={() => changePage(page - 1)}
        >
          Previous page
        </Button>
        <Typography component='h4' variant='h4'>
          {page}
        </Typography>
        <Button
          size='small'
          color='primary'
          onClick={() => changePage(page + 1)}
        >
          Next page
        </Button>
      </Box>
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