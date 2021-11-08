import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) => ({
    card: {
        marginBottom:theme.spacing(5),
    },
    media: {
        height: 350,
        width: 350
    }
}));

function ProductCard() {
    const classes = useStyles(); 
    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdHHF9moFrrBTVWBc4qvU4qaP29Rd23deymA&usqp=CAU"
                    title="Baby Product"
                />
                <CardContent>
                    <Typography variant="h5" gutterBottom>Baby Oil</Typography>
                    <Typography variant="body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat totam maiores possimus ipsa doloremque perferendis consequatur deserunt tempore repellat numquam aspernatur, pariatur modi deleniti ab alias dolor laborum dignissimos aperiam!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat totam maiores possimus ipsa doloremque perferendis consequatur deserunt tempore repellat numquam aspernatur, pariatur modi deleniti ab alias dolor laborum dignissimos aperiam!
                    </Typography>
                </CardContent>        
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">Buy</Button>
                <Button size="small" color="primary">share</Button>
            </CardActions>

            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdHHF9moFrrBTVWBc4qvU4qaP29Rd23deymA&usqp=CAU"
                    title="Baby Product"
                />
                <CardContent>
                    <Typography variant="h5" gutterBottom>Baby Oil</Typography>
                    <Typography variant="body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat totam maiores possimus ipsa doloremque perferendis consequatur deserunt tempore repellat numquam aspernatur, pariatur modi deleniti ab alias dolor laborum dignissimos aperiam!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat totam maiores possimus ipsa doloremque perferendis consequatur deserunt tempore repellat numquam aspernatur, pariatur modi deleniti ab alias dolor laborum dignissimos aperiam!
                    </Typography>
                </CardContent>        
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">Buy</Button>
                <Button size="small" color="primary">share</Button>
            </CardActions>

            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdHHF9moFrrBTVWBc4qvU4qaP29Rd23deymA&usqp=CAU"
                    title="Baby Product"
                />
                <CardContent>
                    <Typography variant="h5" gutterBottom >Baby Oil</Typography>
                    <Typography variant="body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat totam maiores possimus ipsa doloremque perferendis consequatur deserunt tempore repellat numquam aspernatur, pariatur modi deleniti ab alias dolor laborum dignissimos aperiam!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat totam maiores possimus ipsa doloremque perferendis consequatur deserunt tempore repellat numquam aspernatur, pariatur modi deleniti ab alias dolor laborum dignissimos aperiam!</Typography>
                </CardContent>        
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">Buy</Button>
                <Button size="small" color="primary">share</Button>
            </CardActions>

        </Card>
    )
}

export default ProductCard
