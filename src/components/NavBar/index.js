import { useState, useEffect } from 'react';
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export default function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [log, setLog] = useState('Login');
  const { id } = useParams();

  useEffect(() => {
    if(localStorage.getItem('authorized') === '1'){
      setLog('Logout');
    }
  }, [])

  const navTheme = {
      color: '#000000',
      accent: '#3731A6',
      background: '#CFBFFC',
      warning: '#DD4766',
  }
  
  const StyledTabs = styled((props) => (
    <Tabs
      {...props}
      TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
    />
  ))({
    '& .MuiTabs-indicator': {
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: 'transparent',
    },
    '& .MuiTabs-indicatorSpan': {
      maxWidth: 60,
      width: '100%',
      backgroundColor: navTheme.accent,
    },
  });
  
  const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
    ({ theme }) => ({
      textTransform: 'none',
      fontWeight: theme.typography.fontWeightRegular,
      fontSize: theme.typography.pxToRem(15),
      marginRight: theme.spacing(1),
      color: alpha(navTheme.color, 0.7),
      '&.Mui-selected': {
        color: navTheme.color,
      },
    }),
  );

  function ColorTabs() {
    const [value, setValue] = useState(`${location.pathname}`);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
      <Box sx={{ width: '100%' }}>
        <StyledTabs 
          value={value}
          onChange={handleChange}>
          <StyledTab value='/home' label="Home" href="/home" />
          <StyledTab value='/posts' label="Posts" href="/posts" /> 
          <StyledTab value={'/posts/'+id} label={id ? "Post "+id : ''} disabled={id ? false : true}/>
        </StyledTabs>
      </Box>
    );
  }

  const handleLogin = (event) => {
      if (localStorage.getItem('authorized') === '1'){
        localStorage.setItem('authorized', '0');
        navigate('/login');
      }
      navigate('/login')
  }

  return (
    <Box sx={{ flexGrow: 1, margin: 2 }}>
      <AppBar position="static" style={{background: navTheme.background, borderRadius: 3, width: '99vw'}}>
        <Toolbar>
          <ColorTabs />
            <Button style={{color: navTheme.color}} onClick={handleLogin}>
              {log}
            </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
