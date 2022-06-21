import React from 'react'
import {Card,Avatar,CardHeader,IconButton,CardMedia,CardContent,Typography,CardActions,Checkbox} from '@mui/material'
import {MoreVert,Favorite,Share,FavoriteBorder} from '@mui/icons-material'


const Post = () => {
    return (
        <Card sx={{margin:5}}>
                <CardHeader 
                avatar={
                    <Avatar sx={{bgcolor: 'red'}} aria-label="recipe">
                        R
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings" >
                        <MoreVert />
                    </IconButton>
                }
                title="John Doe"
                subheader="September 14, 2022"
                />
                <CardMedia 
                    component="img"
                    height="20%"
                    image="https://imgs.search.brave.com/XkwYQlbCxhx6WegQPgpw62ss5kT_s27x7O4LYB0DMJc/rs:fit:1030:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC41/NFd6dWRFXzgzZ0tr/cFJEWGFGVGNnSGFE/YSZwaWQ9QXBp"
                    alt="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        This is impresive paella is perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen paes along with the mussels
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:'red'}}/>} />
                    </IconButton>
                    <IconButton aria-label="share">
                        <Share/>
                    </IconButton>
                </CardActions>
                
            </Card>
    )
}

export default Post