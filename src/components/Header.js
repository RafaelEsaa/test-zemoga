import React from 'react';
import { makeStyles } from '@mui/styles';
import { Grid, Typography } from '@mui/material';
import Menu from './Menu';

const useStyles = makeStyles((theme) => ({
    header: {
      position: 'absolute',
      width: '100%',
    },
    shadow: {
        background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.698864) 0%, rgba(0, 0, 0, 0.0001) 100%)',
        height: 180,
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 0,
        width: '100%',
    },
    menu: {
        padding: '30px 171px',
        [theme.breakpoints.down('lg')]: {
            padding: '30px 24px 30px 25px',
        },
        position: 'relative',
        zIndex: 2,
    },
    appName: {
        fontSize: '36px !important',
        lineHeight: 43,
        color: '#fff',
    }
}));

const BarMenu = () => {
    const classes = useStyles();

    return (
        <Grid className={classes.header}>
            <Grid className={classes.shadow}/>
            <Grid container className={classes.menu}>
                <Grid item xs={3}>
                    <Grid>
                        <Typography variant="h1" className={classes.appName}>
                            Rule of thumb.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item xs={9}>
                    <Menu/>
                </Grid>
            </Grid>
        </Grid>
    )
}
 
export default BarMenu;