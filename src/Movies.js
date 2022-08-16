import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Modal from '@mui/material/Modal';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { useEffect, useReducer, useState, useContext } from 'react'
import useStyles from './styles';
import { CartContext } from './context/Context';
import {NavLink} from 'react-router-dom';

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                David's Shop
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}
//modal box styling
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 25,
    p: 4,
};

const theme = createTheme();

//start of function
export default function Movies() {

    const classes = useStyles();

    const initialState = {
        loading: true,
        post: [],
        error: ''
    }
    const reducer = (state, action) => {
        switch (action.type) {
            case 'FETCH_SUCCESS':
                return {
                    loading: false,
                    post: action.payload,
                    error: ''
                }
            case 'FETCH_ERROR':
                return {
                    loading: false,
                    post: {},
                    error: 'Something went wrong'
                }
        }
    }

    useEffect(() => {
        axios.get('https://api.jikan.moe/v3/search/anime?q=ghibli&rated=g')
            .then(response => {
                dispatch({ type: "FETCH_SUCCESS", payload: response.data.results })
            })
            .catch(error => {
                dispatch({ type: "FETCH_ERROR" })
            })
    }
    )

    const [state, dispatch] = useReducer(reducer, initialState)

    //For MUI Modal
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    function test(card){
        console.log("Added" + card)
        setCart([...cart, card])
    }

    const { cart, setCart } = useContext(CartContext);


    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <main>
                {/* Hero unit */}
                <Box
                    sx={{
                        bgcolor: 'background.paper',
                        pt: 8,
                        pb: 6,
                    }}
                >
                    <Container maxWidth="sm">
                        <Typography
                            component="h1"
                            variant="h3"
                            align="center"
                            color="text.primary"
                            gutterBottom
                        >
                            Movie and Anime for Purchase
                        </Typography>
                        <Typography variant="h5" align="center" color="text.secondary" paragraph>
                            Timeless classics for $5.99 each.
                        </Typography>
                    </Container>
                </Box>
                <Container sx={{ py: 8 }} maxWidth="lg">
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                        {state.post.map((card) => (
                            <Grid item key={card.mal_id} xs={12} sm={6} md={3} lg={3}>
                                <Card
                                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                                >
                                    <CardMedia
                                        component="img"
                                        sx={{
                                            // 16:9
                                            pt: '56.25%',
                                        }}
                                        image={card.image_url}
                                        alt="random"
                                    />
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {card.title}
                                        </Typography>
                                        <Typography> 
                                            Price: $5.99
                                        </Typography>
                                        <Typography variant="body2"> 
                                            {card.synopsis}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button onClick={() => {handleOpen();test(card);}} size="small">Add</Button>
                                        <Button onClick={() => setCart(cart.filter(item => item.title !== card.title))} size="small">Remove</Button>

                                    </CardActions>
                                </Card>

                            </Grid>

                        ))}
                        <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                            className={classes.modalStyle}

                        >
                            <Box sx={style}>
                                <Typography id="modal-modal-title" variant="subtitle1" align="center">
                                    Movie successfully added!
                                </Typography>
                                <Stack
                                    sx={{ pt: 4 }}
                                    direction="row"
                                    spacing={2}
                                    justifyContent="center"
                                >
                                    <Button component={NavLink} to={'/cart'} variant="contained">Go to cart</Button>
                                    <Button onClick={handleClose}variant="outlined">Continue shopping</Button>
                                </Stack>
                                <Typography id="modal-modal-description" variant="caption" align="right">

                                </Typography>
                            </Box>
                        </Modal>
                    </Grid>

                </Container>
            </main>
            {/* Footer */}
            <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
                <Typography variant="h6" align="center" gutterBottom>
                    Footer
                </Typography>
                <Typography
                    variant="subtitle1"
                    align="center"
                    color="text.secondary"
                    component="p"
                >
                    Something here to give the footer a purpose!
                </Typography>
                <Copyright />
            </Box>
            {/* End footer */}
        </ThemeProvider>
    );
}