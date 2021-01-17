import React, {FC, useState} from "react";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from '@material-ui/icons/Search';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    root: {
        marginBottom: theme.spacing(1),
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        maxWidth: 200,
        boxShadow: 'none',
        border: '2px solid #000',
        borderRadius: 25,
        [theme.breakpoints.down('xs')]: {
            maxWidth: '100%',
            margin: theme.spacing(4, 0, 0, 0)
        },
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
        color: '#000',
        fontSize: 18,

        '& input': {}
    },
    iconButton: {
        padding: 4,
        color: theme.palette.primary.main
    },
}));

type SearchType = {
    searchAction: (searchText: string) => void,
    placeholder: string,
    liveSearch: boolean
}

const Search: FC<SearchType> = ({searchAction, placeholder, liveSearch}) => {
    const classes = useStyles();
    const [searchValue, setSearchValue] = useState('');
    const [typingTimeout, setTypingTimeout] = useState<any>(null);

    const handleLiveChange = ({target: {value}}: any) => {
        if (typingTimeout) {
            clearTimeout(typingTimeout);
        }

        setSearchValue(value);

        setTypingTimeout(setTimeout(() => {
            searchAction(value);
        }, 200));

    };

    const handleChange = ({target: {value}}: any) => {
        setSearchValue(value);
    };

    const handleSubmit = (e: any) => {
        if (!searchValue) {
            return false
        }
        e.preventDefault();
        searchAction(searchValue);
    };

    const onChangeAction = liveSearch ? handleLiveChange : handleChange;

    return (
        <Paper component="form" className={classes.root} onSubmit={handleSubmit}>
            <InputBase
                onChange={onChangeAction}
                className={classes.input}
                placeholder={placeholder}
                value={searchValue}
            />
            <IconButton type="submit" className={classes.iconButton} aria-label="search"
                        disabled={!searchValue || liveSearch}>
                <SearchIcon/>
            </IconButton>
        </Paper>
    )
};

export default Search;
