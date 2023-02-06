import React from "react";
import {
    Typography,
    AppBar,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    CssBaseline,
    Grid,
    Toolbar,
    Container,
    Button
} from '@mui/material';
//import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import { PhotoCamera } from '@mui/icons-material';
import useStyles from "./styles";

/*
CssBaseline - ponuja vnaprej dolocene stile
PhotoCamera - ime ikone, ki smo jo importali
 */

const App = () => {
    const classes = useStyles;
    return(
        <>
            <CssBaseline />
            <AppBar position="relative">
               <Toolbar>
                   <PhotoCamera />
                   <Typography variant="h6">
                        Album
                   </Typography>
               </Toolbar>
            </AppBar>
            <main>
                <div className={classes.izgled}>
                    <Container maxWidth="sm">
                        <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                            text
                        </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            paragraph
                        </Typography>
                        <div>
                            <Grid container justify="center" spacing={2}>
                                <Grid item>
                                    <Button variant="contained" color="primary">
                                        button
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant="outlined" color="secondary">
                                        button 2
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
            </main>
        </>
);
}

export default App;