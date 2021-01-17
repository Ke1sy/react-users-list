import React, {FC} from "react";
import {Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    root: {
        paddingLeft: '100px',
        position: 'relative',

        '&:before': {
            position: 'absolute',
            display: 'inline-block',
            borderRadius: '50%',
            backgroundColor: theme.palette.primary.main,
            height: 80,
            width: 80,
            content: '\'\'',
            top: 0,
            left: 0,
            transform: 'translate(0, -25%)'
        }
    },
}));

type PageTitleType = {
    text: string
}

const PageTitle: FC<PageTitleType> = ({text}) => {
    const classes = useStyles();

    return (
        <Typography variant="h2" className={classes.root}>
            {text}
        </Typography>
    )
};

export default PageTitle;
