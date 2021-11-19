import LayoutContainer from "../components/LayoutContainer";
import { Card, CardContent, CardActions, Button, Typography, Box } from '@mui/material/';
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    const handleJoin = (event) => {
        navigate('/login');
    }

    return (
        <LayoutContainer>
            <Card sx={{width: '80vw'}} raised>
                <Box sx={{display: 'flex', flexDirection: 'column'}}>
                    <CardContent>
                    <Typography gutterBottom variant="h3" component="div">
                        Welcome
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                        In this blog you'll be able to navigate through posts and see their indvidual information
                    </Typography>
                    </CardContent>
                    <CardActions sx={{alignSelf: 'center'}}>
                        <Button color='secondary'  size='medium' variant='contained'
                        onClick={handleJoin}>
                            Start
                        </Button>
                    </CardActions>
                </Box>
            </Card>
        </LayoutContainer>
    )
};

export default Home;