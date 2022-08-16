import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({ //creating custom hook
    container: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8,0,6)
    },
    icon: {
        marginRight: '20px',
    },
    button:{
        "&.active": {
            background: '#757de8',
        },
    },
    cardGrid: {
        padding: '20px 0px'
    },
    card: { 
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        padding: '20px'
    },
    cardMedia: {
        paddingTop: '56.25%'// 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    modalStyle: {  
        
    },
    
}));

export default useStyles;