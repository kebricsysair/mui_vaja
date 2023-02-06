import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => {
    return{
        izgled: {
            backgroundColor: theme.palette.background.paper,
            padding: theme.space(8, 0, 6)
        }
    }
});
export default useStyles;