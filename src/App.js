import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PostView from './views/PostView';
import PostDashboard from './views/PostDashboard';
import Home from './views/Home'
import Login from './views/Login';
import NotFoundScreen from './views/NotFoundScreen';
import { ProtectedRoute } from './components/PrivateRoute';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Home />}/>
        <Route path='/home' exact element={<Home />}/>
        <Route path='/login' exact element={<Login />} />
        <Route path='/posts' exact element={<PostDashboard />} />
        <Route
        path="/posts/:id"
        element={
          <ProtectedRoute redirectTo="/login">
            <PostView />
          </ProtectedRoute>
        }
        />
        <Route path="*" element={<NotFoundScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
