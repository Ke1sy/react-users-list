import React, {FC} from 'react';
import {makeStyles, createStyles, Theme} from '@material-ui/core/styles';
import {Typography, Link} from '@material-ui/core';
import {NavLink} from "react-router-dom";
import {NavLinkType} from "../Layout/Header";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            justifyContent: 'flex-end',
            padding: `${theme.spacing(3)}px 0`,
            '& > * + *': {
                marginLeft: theme.spacing(4.5),
            },
        },
        link: {
            textDecoration: 'none',
            fontWeight: 700
        },
        activeLink: {
            textDecoration: 'underline',
            pointerEvents: 'none'
        }
    }),
);

type NavigationType = {
    navLinks: NavLinkType[]
}

const Navigation: FC<NavigationType> = ({navLinks}) => {
    const classes = useStyles();

    return (
        <Typography className={classes.root}>
            {navLinks.map((link: NavLinkType) => (
                <Link
                    component={NavLink}
                    to={link.path}
                    key={link.title}
                    color="inherit"
                    variant="body2"
                    activeClassName={classes.activeLink}
                    className={classes.link}
                >
                    {link.title}
                </Link>
            ))}

        </Typography>
    );
};

export default Navigation;
