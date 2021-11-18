import {Box} from '@mui/material';
import NavBar from '../NavBar';

export default function LayoutContainer({ children }) {
    return (
        <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        >
            <NavBar />
            {children}
            <p sx={{textAlign: "center",padding: "16px",}}>© The Ksquare Group</p>
        </Box>
    )
}

