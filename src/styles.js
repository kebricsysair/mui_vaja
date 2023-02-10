import { makeStyles } from "@mui/styles";
import {paperClasses} from "@mui/material";

/*
const useStyles = makeStyles((theme) => {
    return{
        izgled: {
            backgroundColor: theme.palette.background.paper,
            padding: theme.space(8, 0, 6)
        }
    }
});

 */

const useStyles = makeStyles({
    izgled: {
        background: "whitesmoke",
    },
    drugizgled: {
        background: "pink",
    },
    ikona: {
        marginRight: '20px'
    },
    gumbi: {
        marginLeft: '30px',
        marginTop: '20px',
        color: 'black'
    },
    cardGrid: {
        padding: '20px 0'
    },
    card: {
        minWidth: '280px',
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    cardMedia: {
        paddingTop: '56.25%'
    },
    cardContent: {
        flexGrow: 1
    },
    footer:{
        backgroundColor: "whitesmoke",
        padding: '50px 0px',
        color: 'black'
    }
})
export default useStyles;