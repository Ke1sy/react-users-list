import React, {FC} from 'react';
import {Container} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4)
    }
}));

interface IMain  {
    children: any
}

const Main:FC<IMain> = props => {
    const classes = useStyles()

    return (
        <Container maxWidth="lg"  className={classes.root}>
            {props.children}
        </Container>
    )
};

export default Main

