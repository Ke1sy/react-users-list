import React, {FC} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {ListItem, Button, Drawer, Link} from '@material-ui/core';
import {NavLink} from "react-router-dom";
import MenuIcon from '@material-ui/icons/Menu';
import {NavLinkType} from "../Layout/Header";

const useStyles = makeStyles({
    root: {
        textAlign: 'right',
        padding: '20px 0'
    },
    list: {
        width: 250,
        paddingTop: 20
    },
    fullList: {
        width: 'auto',
    },
    link: {
        textDecoration: 'none',
        fontWeight: 700,
        padding: '10px 20px',
        width: '100%'
    },
    activeLink: {
        textDecoration: 'underline',
        pointerEvents: 'none'
    },
    listItem: {
        padding: 0
    }
});


type MobileNavigationType = {
    navLinks: NavLinkType[]
}

const MobileNavigation: FC<MobileNavigationType> = ({navLinks}) => {
    const classes = useStyles();
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <div className={classes.root}>
            <Button onClick={() => setIsOpen(true)} variant="outlined" color="primary" size="large">
                <MenuIcon color="primary"/>
            </Button>
            <Drawer anchor="left" open={isOpen} onClose={() => setIsOpen(false)}>
                <div
                    className={classes.list}
                    role="presentation"
                    onClick={() => setIsOpen(false)}
                    onKeyDown={() => setIsOpen(false)}
                >
                    {navLinks.map((link: NavLinkType) => (
                        <ListItem button key={link.title} className={classes.listItem}>
                            <Link
                                component={NavLink}
                                to={link.path}
                                color="inherit"
                                variant="body2"
                                activeClassName={classes.activeLink}
                                className={classes.link}
                            >
                                {link.title}
                            </Link>
                        </ListItem>
                    ))}
                </div>
            </Drawer>
        </div>
    );
};

export default MobileNavigation;
