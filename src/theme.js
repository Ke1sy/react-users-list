import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
    typography: {
        useNextVariants: true,
        color: '#000',
        h1: {
            fontSize: '2.25rem',
            fontWeight: 700
        },
        h2: {
            fontSize: '2rem',
            fontWeight: 700
        },
        h3: {
            fontSize: '1.75rem',
            fontWeight: 700
        },
        h4: {
            fontSize: '1.5rem',
            fontWeight: 700
        },
        h5: {
            fontSize: '1.25rem',
            fontWeight: 700
        },
        h6: {
            fontSize: '1rem',
            fontWeight: 700
        },
        body1: {
            fontSize: '1.25rem'
        },
        body2: {
            fontSize: '1rem'
        }
    },
    palette: {
        type: 'light',
        primary: {
            main: '#ffa602'
        },
        secondary: {
            main: '#1976d2',
        },
        success: {
            main: '#00B294',
        },
        background: {
            default: '#fff'
        },
        error: {
            main: '#E81123'
        },
        contrastThreshold: 3,
        tonalOffset: 0.2,
        contrastText: '#fff',
        text: {
            primary: '#000',
            secondary: '#333',
        },
    }
});
