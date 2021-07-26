import { makeStyles } from '@material-ui/core/styles';


const useStyle = makeStyles((theme) => ({
    container : {
        backgroundColor:theme.palette.background.paper,
        padding:theme.spacing(8,0,6)
    },
    icon : {
        marginRight:'20px',
    },
    buttons : {
        marginTop : '40px',

    },
    cardGrid:{
        padding:'20px 0'
    },
    cards:{
        height:'100%',
        display:'flex',
        flexDirection:'column'
    },
    cardContent:{
        flexGrow :1
        
    },
    cardMedia:{
        paddingTop : '56.25%' //16:9
    },
    footer:{
        backgroundColor : theme.palette.background.paper,
        padding : '50px 0'

    }


}));

export default useStyle;