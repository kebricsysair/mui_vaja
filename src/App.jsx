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
    Button,
} from '@mui/material';
//import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import { PhotoCamera } from '@mui/icons-material';
import useStyles from "./styles";

/*
CssBaseline - ponuja vnaprej dolocene stile
PhotoCamera - ime ikone, ki smo jo importali
cardMedia se uporablja za predstavizven element - opening and closing elements
 */

const App = () => {
    const classes = useStyles();
    const slike = [{index: 1, url: 'nek'}, {index: 2, url: 'nek'}, {index: 3, url: 'nek'}];
    return(
        <>
            <CssBaseline />
            <AppBar position="relative">
               <Toolbar>
                   <PhotoCamera className={classes.ikona}/>
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
                                    <Button className={classes.gumbi} variant="contained" color="primary">
                                        button
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button className={classes.gumbi} variant="outlined" color="secondary">
                                        button 2
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
                <Container className={classes.cardGrid} maxWidth="md">
                    <Grid container spacing={4}>
                        {slike.map((slika) => (
                            <Grid item key={slika.index} xs={12} sm={6} md={4}>
                                <Card className={classes.card}>
                                    <CardMedia
                                        className={classes.cardMedia}
                                        image="https://source.unsplash.com/random"
                                        title="Image title"
                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant="h5">
                                            Heading
                                        </Typography>
                                        <Typography>
                                            Opis slike
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" color="primary">View</Button>
                                        <Button size="small" color="primary">Edit</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
            <footer className={classes.footer}>
                <Typography gutterBottom variant="h5" align="center">
                    Footer
                </Typography>
                <Typography gutterBottom variant="subtitle1" align="center" color="textSecondary">
                    Opis
                </Typography>
            </footer>
        </>
);
}

export default App;