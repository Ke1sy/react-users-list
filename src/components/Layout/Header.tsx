import React from 'react';
import {AppBar, Container, Hidden} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import Navigation from "../Navigation/Navigation";
import RM from "../../RouterManager";
import MobileNavigation from "../Navigation/MobileNavigation";

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.background.default,
        boxShadow: 'none'
    },
    title: {
        flexGrow: 1,
    },
}));


export type NavLinkType = {
    title: string,
    path: string
}

const NAV_LINKS: NavLinkType[] = [
    {
        title: 'Services',
        path: RM.services.path
    }, {
        title: 'Clients',
        path: RM.clients.path
    }, {
        title: 'About us',
        path: RM.about.path
    }, {
        title: 'Members',
        path: RM.users.path
    }, {
        title: 'Contacts',
        path: RM.contacts.path
    }
];

export default () => {
    const classes = useStyles();
    return (
        <AppBar position="static" className={classes.root}>
            <Container maxWidth="lg">
                <Hidden xsDown>
                    <Navigation navLinks={NAV_LINKS}/>
                </Hidden>
                <Hidden smUp>
                    <MobileNavigation navLinks={NAV_LINKS}/>
                </Hidden>
            </Container>
        </AppBar>
    )
}

