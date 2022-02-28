import React from 'react';
import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        padding: '0px 170px 0px 171px',
        [theme.breakpoints.down('lg')]: {
            padding: '0px 24px 0px 25px',
        }
    }
}));

const Container = ({ children }) => {
    const classes = useStyles();

    return (
        <Grid className={classes.container}>
            {children}
        </Grid>
    );
}
 
export default Container;