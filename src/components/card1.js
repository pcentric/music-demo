import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    maxHeight: "auto",
    marginLeft: 40,
    marginTop: 10,
    marginRight: 0,
    padding:1,
    borderRadius:10,

    background:" linear-gradient(60deg, #0033cc -10%, #0033cc -70%,#33ccff 100%,#99e6ff ,white 50%,white 100%)",
  },
  h1title: {
color:"white"
  },
btn:{
    border: "1px solid white",
    // textAlign: "center",
    color: "white",
    padding:10,
    width:200,
margin: "0 auto"
}
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent className="text-center">
          <Typography className={classes.h1title} gutterBottom variant="h5" component="h2">
            Upgraded to Pro
          </Typography>
          <Typography className={classes.h1title}s variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button className={classes.btn} size="small" color="primary">
          Get Pro
        </Button>
        
      </CardActions>
    </Card>
  );
}
