import React from 'react';
import { Grid, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    containerBannerToCallAction: {
        padding: '18px 36px',
        height: 108,
        backgroundPosition: 'center 50%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        position: 'relative',
        display: 'flex'
    }
}));

const BannerCallToAction = ({ children, backgroundImg }) => {
    const classes = useStyles();

    return (
        <Grid className={classes.containerBannerToCallAction} style={{ backgroundImage: `url(${backgroundImg})`}}>
            <Box sx={{
                position: "absolute",
                top: 0,
                height: 108,
                background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url(Image.png)',
                width: '100%',
                left: 0
            }}
            />
            { children }
        </Grid>
    );
}
 
export default BannerCallToAction;