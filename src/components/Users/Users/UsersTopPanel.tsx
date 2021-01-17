import React, {FC} from "react";
import {Box, Button} from "@material-ui/core";
import {UserType} from "../../../types/types";
import Search from "../../Search/Search";
import {makeStyles} from "@material-ui/core/styles";

type UsersTopPanelType = {
    searchAction: (searchText: string) => void,
    openCreateUpdateDialog: (value: boolean, user: UserType | null) => void
}

const useStyles = makeStyles(theme => ({
    root: {
        margin: theme.spacing(8, 0, 0, 0),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        flexWrap: 'wrap',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column-reverse',
            alignItems: 'flex-end',
            marginTop: theme.spacing(5),
        },
    },
    btn: {
        borderRadius: 25,
        textTransform: 'none',
        fontSize: '1rem',
    }
}));


const UsersTopPanel: FC<UsersTopPanelType> = ({searchAction, openCreateUpdateDialog}) => {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Search placeholder="Search" searchAction={searchAction} liveSearch={true}/>
            <Button variant="contained" className={classes.btn} color="primary"
                    onClick={() => openCreateUpdateDialog(true, null)}>
                Add new
            </Button>
        </Box>
    )
};

export default UsersTopPanel;
