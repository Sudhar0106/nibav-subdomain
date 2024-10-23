import { Box, Typography } from '@mui/material';

function NotFound() {
    return (
        <Box sx={{
            width: "100%",
            height: "100vh",
            display: "flex",
            flexDirection:"column",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <Typography component="h6" variant='h3' >404 Error</Typography>
            <Typography component="p" variant='h6'>Page not found</Typography>
        </Box>
    )
}

export default NotFound