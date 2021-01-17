import React, {FC} from "react";
import {
    TableContainer,
    Table,
    TableRow,
    TableHead,
    TableBody,
    TableCell,
    Box,
    Select,
    MenuItem,
    FormControl,
    InputLabel
} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {UserType} from "../../../types/types";
import CloseIcon from '@material-ui/icons/Close';
import EditIcon from '../../../assets/icons/edit-icon.png';
import Preloader from "../../Preloader/Preloader";

const useStyles = makeStyles(theme => ({
    table: {
        minWidth: 650,
        margin: theme.spacing(6, 0),

        '.MuiTableCell-alignRight': {
            maxWidth: 135,
            boxSizing: 'border-box'
        }
    },
    tableHead: {
        '& th': {
            fontWeight: 700,
            [theme.breakpoints.down('md')]: {
                padding: '7px !important'
            },
        }
    },
    tableCell: {
        padding: 7,
        [theme.breakpoints.up('md')]: {
            padding: 15
        },
    },
    actionsIcon: {
        padding: theme.spacing(0, 1),
        cursor: 'pointer',
        '&:hover svg, &:hover img': {
            transform: 'scale(1.2)'
        }
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 105,

        '& .MuiSelect-root': {
            paddingTop: 10,
            paddingBottom: 10,
            fontSize: '1rem'

        }
    },
    menuItem: {
        fontSize: '1rem'
    },
    formLabel: {
        padding: theme.spacing(0, 1.5),
        backgroundColor: theme.palette.background.default,
        fontSize: '1rem'
    },
}));

type UsersTableType = {
    users: UserType[];
    openCreateUpdateDialog: (value: boolean, user: UserType | null) => void
    openDeleteDialog: (value: boolean, user: UserType | null) => void,
    usersAreLoading: boolean,
    sortKey: "name" | "phone",
    handleSortKeyChange: (event: any) => void
}

const UsersTable: FC<UsersTableType> = ({users, openCreateUpdateDialog, openDeleteDialog, usersAreLoading, sortKey, handleSortKeyChange}) => {
    const classes = useStyles();

    const onEdit = (user: UserType) => {
        openCreateUpdateDialog(true, user);
    };

    const onDelete = (user: UserType) => {
        openDeleteDialog(true, user);
    };

    return (
        <TableContainer component={'div'}>
            <Preloader showPreloader={usersAreLoading}/>

            <Table className={classes.table} aria-label="caption table">
                <TableHead className={classes.tableHead}>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="left">Email</TableCell>
                        <TableCell align="left">Phone</TableCell>
                        <TableCell align="left">Website</TableCell>
                        <TableCell align="right">
                            <FormControl variant="outlined" className={classes.formControl}>
                                <InputLabel id="sortSelect" className={classes.formLabel}>Order By</InputLabel>
                                <Select
                                    labelId="sortSelect"
                                    id="sort-select"
                                    value={sortKey}
                                    onChange={handleSortKeyChange}
                                >
                                    <MenuItem value="name" className={classes.menuItem}>Name</MenuItem>
                                    <MenuItem value="phone" className={classes.menuItem}>Phone</MenuItem>
                                </Select>
                            </FormControl>

                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map((user) => {
                        const {id, name, email, phone, website} = user;
                        return (
                            <TableRow key={id}>
                                <TableCell className={classes.tableCell} component="th" scope="row">
                                    {name}
                                </TableCell>
                                <TableCell className={classes.tableCell} align="left">{email}</TableCell>
                                <TableCell className={classes.tableCell} align="left">{phone}</TableCell>
                                <TableCell className={classes.tableCell} align="left">{website}</TableCell>
                                <TableCell className={classes.tableCell} align="right">
                                    <Box component="span" className={classes.actionsIcon} onClick={() => onEdit(user)}>
                                        <img src={EditIcon} alt="" height="22"/>
                                    </Box>

                                    <Box component="span" className={classes.actionsIcon}
                                         onClick={() => onDelete(user)}>
                                        <CloseIcon color="primary" fontSize="small"/>
                                    </Box>
                                </TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    )
};

export default UsersTable;
