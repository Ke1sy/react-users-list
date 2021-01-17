import React, {useState, useEffect, FC} from 'react';
import {
    Button,
    Dialog,
    DialogTitle,
    DialogActions,
    DialogContent,
    TextField,
    FormControl,
} from '@material-ui/core';
import useStyles from "./styles";
import CancelIcon from '@material-ui/icons/Cancel';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import {UserType} from "../../types/types";

type EditDialogType = {
    user: UserType | null,
    createUpdateUser: (user: FormDataType, type: 'add' | 'edit') => void,
    isOpen: boolean,
    openCreateUpdateDialog: (value: boolean, user: UserType | null) => void
}

type FormDataType =  {
    id: null | number | string,
    name: string,
    email: string,
    phone: string,
    website: string,
}


const EditDialog:FC<EditDialogType> = ({createUpdateUser, isOpen, user, openCreateUpdateDialog}) => {
    const classes = useStyles();
    const [actionType, setActionType] = useState<'add' | 'edit'>('add');
    const [formData, setFormData] = useState<FormDataType>({
        id: null,
        name: '',
        email: '',
        phone: '',
        website: ''
    });

    useEffect(() => {
        if (user) {
            setActionType('edit');
            const {id, name, email, phone, website} = user;
            setFormData({
                id,
                name,
                email,
                phone,
                website
            })
        } else {
            setActionType('add');
            clearFormValues();
        }
    }, [user]);

    const handleChange = (name: string) => ({target}: {target: any}) => {
        const {value} = target;
        setFormData({
            ...formData,
            [name]: value
        })
    };

    const handleClose = () => {
        openCreateUpdateDialog(false, null);
        clearFormValues();
    };

    const createUpdateUserSubmit = () => {
        const { id, name, email, phone, website} = formData;
        createUpdateUser({
            id,
            name,
            email,
            phone: phone,
            website
        }, actionType);
        handleClose();
    };

    const clearFormValues = () => {
        setFormData({
            id: null,
            name: '',
            email: '',
            phone: '',
            website: ''
        })
    };

    let {name, email, phone, website} = formData;

    return (
        <Dialog
            maxWidth="sm"
            fullWidth={true}
            open={isOpen}
            onClose={handleClose}
            aria-labelledby="form-dialog-title"
        >
            <DialogTitle id="form-dialog-title" className={classes.title}>
                {
                    actionType === 'add'
                        ? 'Create New User'
                        : 'Update User'
                }
            </DialogTitle>
            <DialogContent className={classes.content}>
                <FormControl className={classes.formControl}>
                    <TextField
                        autoFocus
                        id="name"
                        label="Name"
                        type="text"
                        fullWidth
                        variant="outlined"
                        value={name}
                        required={true}
                        onChange={handleChange('name')}
                    />
                </FormControl>
                <FormControl className={classes.formControl}>
                    <TextField
                        id="email"
                        label="Email"
                        type="text"
                        fullWidth
                        variant="outlined"
                        value={email}
                        required={true}
                        onChange={handleChange('email')}
                    />
                </FormControl>
                <FormControl className={classes.formControl}>
                    <TextField
                        id="phone"
                        label="Phone"
                        type="text"
                        fullWidth
                        variant="outlined"
                        value={phone}
                        required={true}
                        onChange={handleChange('phone')}
                    />
                </FormControl>
                <FormControl className={classes.formControl}>
                    <TextField
                        id="website"
                        label="Website"
                        type="text"
                        fullWidth
                        variant="outlined"
                        value={website}
                        required={true}
                        onChange={handleChange('website')}
                    />
                </FormControl>
            </DialogContent>
            <DialogActions className={classes.dialogActions}>
                <Button onClick={handleClose} variant="outlined" className={classes.cancelBtn}>
                    <CancelIcon fontSize="small"/>Cancel
                </Button>
                <Button onClick={createUpdateUserSubmit} color="primary" variant="outlined">
                    <CheckCircleIcon fontSize="small"/>
                    {
                        actionType === 'add'
                            ? 'Create'
                            : 'Update'
                    }
                </Button>
            </DialogActions>
        </Dialog>
    )
};

export default EditDialog;
