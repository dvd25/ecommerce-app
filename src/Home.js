import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';

function Home(props) {
    return (
        <>
        <div>

        <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={12}
          sm={10}
          md={12}
          sx={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1487700160041-babef9c3cb55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2052&q=80)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >  <Typography variant="h1" component ="h1" sx={{pt: 10}}> Ecommerce Mini Project</Typography></Grid>

        </Grid>

        </div>
        
        </>
    );
}

export default Home;