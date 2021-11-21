import { Card, CardContent, Typography, Button } from '@mui/material';
import { useNavigate, Navigate} from 'react-router-dom';
import LayoutContainer from '../components/LayoutContainer';
import { selectSpecificPost } from '../features/posts/postsSelectors';
import { useSelector } from 'react-redux';
  
const PostView = () => {
    const navigate = useNavigate();    
    const post = useSelector(selectSpecificPost);

    const handleReturnToDashboard = () => {
        navigate('/posts');
    };
    
    if (!post) return <Navigate to='/posts' />; 
    
    return (
        <LayoutContainer>
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
  