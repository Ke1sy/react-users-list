import {makeStyles} from "@material-ui/core/styles";

export default makeStyles(theme => ({
    dialog: {
        paddingBottom: theme.spacing(2),
    },
    title: {
        textAlign: 'center'
    },
    formControl: {
        marginTop: theme.spacing(3),
        width: '100%',
    },

    contentText: {
        marginBottom: 0,
        textAlign: 'center'
    },

    content: {
      overflowX: 'hidden'
    },
    dialogActions: {
        padding: '20px 24px'
    },
    cancelBtn: {
        color: theme.palette.error.main
    }
}));
