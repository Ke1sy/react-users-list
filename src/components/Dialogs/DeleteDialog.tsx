import React, {FC} from 'react';
import {
    Button,
    DialogTitle,
    Dialog,
    DialogActions,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import CancelIcon from '@material-ui/icons/Cancel';
import {UserType} from "../../types/types";
import useStyles from "./styles";

type DeleteDialogType = {
    isOpen: boolean,
    setIsOpen: (value: boolean, user: UserType | null) => void,
    deleteAction: (id: number | string) => void,
    itemToDelete: UserType | null
}

const DeleteDialog:FC<DeleteDialogType> = ({isOpen, setIsOpen, deleteAction, itemToDelete}) => {
    const classes = useStyles();

    const handleClose = () => {
        setIsOpen(false, null);
    };

    const deleteActionSubmit= () => {
        if(itemToDelete) {
            deleteAction(itemToDelete.id);
        }
    };

    return (
        <div>
            <Dialog
                open={isOpen}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle className={classes.title}>Are you sure you want to delete element?</DialogTitle>
                <DialogActions className={classes.dialogActions}>
                    <Button onClick={handleClose} variant="outlined" className={classes.cancelBtn}>
                        <CancelIcon fontSize="small"/>
                        Cancel
                    </Button>
                    <Button onClick={deleteActionSubmit} color="primary" variant="outlined" autoFocus>
                        <DeleteIcon fontSize="small"/>
                        Confirm
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default DeleteDialog;
