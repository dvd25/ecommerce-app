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
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { useEffect, useReducer } from 'react'
import useStyles from './styles';
import { CartContext } from './context/Context';
import { NavLink } from 'react-router-dom';
import { useContext} from 'react'

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

//styling
const theme = createTheme();
//modal box pop up styling
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


//start of function
export default function FilteredProducts() {

  //can use custom classes with {class.classname}
  const classes = useStyles();
  const { cart, setCart, filterBy} = useContext(CartContext);
  
  //for handling modal card pop
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //for handling add to cart
  function handleAdd(card) {
    console.log(card)
    setCart([...cart, card]) //add card content to cart
  }

  //initial state for fetchAPI
  const initialState = {
    loading: true, //true when loading and no data in post
    post: [], //empty
    error: ''
  }

  //reducer function for axios fetch
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
      default:
        return {
          post: {}
        }
    }
  }
  
  
  useEffect(() => {
    const URL = `https://fakestoreapi.com/${filterBy}`
    axios.get(URL)
      .then(response => {
        dispatch({ type: "FETCH_SUCCESS", payload: response.data })
      })
      .catch(error => {
        dispatch({ type: "FETCH_ERROR" })
      })
  },[filterBy] //renders if filterBy state changes
  )
  //context hooks
  const [state, dispatch] = useReducer(reducer, initialState)

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
              variant="h4"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Clothing and Accessories
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Variety of clothes and accessories for purchase. Free shipping to NZ and Australia.
            </Typography>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="lg">
          {/* End hero unit */}
          <Grid container spacing={8}>
            {state.post.map((card) => ( //for every item in my state.post
              <Grid item key={card.id} xs={12} sm={4} md={3}>
                <Card variant="outlined"
                  sx={{ height: '100%', maxWidth: '80%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      height: '300px',
                      maxWidth: '200px',
                      margin: '10px'
                    }}
                    image={card.image}
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }} spacing={1}>
                      <Grid item xs={12}>
                        <Typography gutterBottom variant="subtitle1" component="div">
                          {card.title.slice(0, 32)}
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography variant="body2"> 
                          ${card.price}
                        </Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                  <CardActions>
                    {/* buttons that triggers modal pop up and at the same time passes the details to be added to the cart */}
                  <Button onClick={() => {handleOpen();handleAdd(card);}} size="small">Add</Button> 
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
                  <Button onClick={handleClose} variant="outlined">Continue shopping</Button>
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