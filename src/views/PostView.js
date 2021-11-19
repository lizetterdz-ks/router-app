import { Card, CardContent, Typography, Button } from '@mui/material';
import { useParams, useNavigate, Navigate } from 'react-router-dom';
import LayoutContainer from '../components/LayoutContainer';
import { useState, useEffect } from 'react';
  
const PostView = () => {
    const [post, setPost] = useState({});
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    let { id } = useParams();
    const [status, setStatus] = useState('');

    useEffect(() => {
        async function fetchPost () {
          let res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
          let data = await res.json();
          setPost(data);
          setStatus(res.status);
          setLoading(false);
        }
        setLoading(true);
        fetchPost();
      }, [id])


    const handleReturnToDashboard = () => {
        navigate('/posts');
    };
    
    if (status === 404) return <Navigate to='/posts' />; 
    
    return (
        <LayoutContainer>
        {
            loading ?
            <>
                <h2>Loading...</h2>
            </>
            :
            <>
            <Card sx={{ maxWidth: 345 }}>
            <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                {post.title}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                    By: User {post.userId}
                </Typography>
                <Typography gutterBottom variant='body1' component='div'>
                {post.body}
                </Typography>
            </CardContent>
            </Card>
            </>
        }

        <Button
            style={{ marginTop: '2rem' }}
            color='primary'
            onClick={handleReturnToDashboard}
        >
            Return to dashboard
        </Button>
        </LayoutContainer>
    );
};
  
  export default PostView;
  