import { Link } from 'react-router-dom';
import LayoutContainer from '../components/LayoutContainer'

const NotFoundScreen = () => {
  return (
    <LayoutContainer>
      <div>
        <h1>404 - Not Found!</h1>
        <Link to='/home'>Go Home</Link>
      </div>
    </LayoutContainer>
  );
};

export default NotFoundScreen;
