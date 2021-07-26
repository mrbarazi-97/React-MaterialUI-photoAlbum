import React from 'react';
import {Typography,AppBar,Button,Card,CardActions,CardContent,CardMedia,CssBaseline,Grid,Toolbar,Container} from '@material-ui/core';
import { PhotoCamera } from '@material-ui/icons';


import useStyle from './styles';

const card =[1,2,3,4,5,6,7,8,9]
const App = () => {
    const classes = useStyle();
    return(
        <>
            <CssBaseline />
            <AppBar position = "relative">
                <Toolbar>
                    <PhotoCamera className={classes.icon}/>
                    <Typography variant="h6">
                        Photo Album
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                <div className={classes.container}>
                    <Container maxWidth="sm">
                        <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                            Photo Album
                        </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, velit sint? Aperiam voluptatibus incidunt iste aut quia ullam corrupti sequi.
                        </Typography>
                        <div className ={classes.buttons}>
                            <Grid container spacing={2} justify="center">
                                <Grid item>
                                    <Button variant="contained" color="primary">
                                        see my pics
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant="outlined" color="primary">
                                        Action
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
                <Container className={classes.cardGrid} maxWidth="md">
                    <Grid container spacing={4}>
                        {
                            card.map(()=>(
                                <Grid item key={card} xs={12} sm={6} md={4}>
                            <Card className={classes.cards}>
                                <CardMedia 
                                    className={classes.cardMedia}
                                    image="https://news.artnet.com/app/news-upload/2014/08/Screen-Shot-2014-08-16-at-11.13.55-PM.png"
                                    title="Image title"
                                />
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant="h5">
                                        Heading
                                    </Typography>
                                    <Typography>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio placeat odit, necessitatibus accusantium corporis velit?
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
                <Typography variant="h6" align="center" gutterBottom>
                    Footer
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium hic quis ad sapiente est a placeat nihil labore officiis voluptate.
                </Typography>

            </footer>
        </>
    );
}


export default App;