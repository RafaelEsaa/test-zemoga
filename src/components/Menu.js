import React from 'react';
import { makeStyles } from '@mui/styles';
import { Grid, Box, List, ListItem, ListItemText } from '@mui/material';
import SearchIcon from '../assets/img/SearchIcon.js';

const useStyles = makeStyles({
    ulList: {
        padding: '0px !important',
    },
    liList: {
        '& div': {
            paddingRight: 18
        }
    },
    textMenu: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 300,
        lineHeight: 21.6
    },
    searchIcon: {
        position: 'relative'
    }
});

const Menu = () => {
    const classes = useStyles();
    return (
        <Grid
            container
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
        >
            <List className={classes.ulList}>
                <ListItem className={classes.liList}>
                    <ListItemText primary="Past Trials" className={classes.textMenu}/>
                    <ListItemText primary="How It Works" className={classes.textMenu}/>
                    <ListItemText primary="Login / Sign Up" className={classes.textMenu}/>
                </ListItem>
            </List>
            <Box className={classes.searchIcon}>
                <SearchIcon/>
            </Box>
        </Grid>
    );
}
 
export default Menu;