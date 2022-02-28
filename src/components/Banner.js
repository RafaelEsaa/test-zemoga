import React from 'react';
import { Grid } from '@mui/material';

const Banner = ({ imgBanner, children }) => {
    return (
        <Grid style={{
            backgroundImage: `url(${imgBanner})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100vh",
            width: "100%",
        }}>
            {children}
        </Grid>
    );
}
 
export default Banner;