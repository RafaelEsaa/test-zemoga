import React from 'react';
import { makeStyles } from '@mui/styles';
import FacebookIcon from '../assets/img/FacebookIcon';
import TwitterIcon from '../assets/img/TwitterIcon';
import { Grid, Box, Typography } from '@mui/material';

const useStyles = makeStyles({
    container: {
        paddingBottom: 35.5,
        position: 'relative'
    },
    line: {
        position: 'absolute',
        top: 0,
        borderTop: '2px dashed #464646',
        width: '100%',
    },
    containerFooter: {
        position: 'relative',
        paddingTop: 20,
        marginTop: 36,
        '& .terms': {
            '& .text': {
                fontSize: 18,
                paddingRight: 36,
                fontWeight: 400
            }
        },
        '& .social-media': {
            '& .text': {
                fontSize: 15,
                fontWeight: 400,
                paddingRight: 18
            }
        }
    }
});

const Footer = () => {
    const classes = useStyles();

    return (
        <Grid className={classes.container}>
            <Grid className={classes.line}/>
            <Grid container className={classes.containerFooter}>
                <Grid container item xs={8} className="terms">
                    <Typography variant="p" className="text">Terms and Conditions</Typography>
                    <Typography variant="p" className="text">Privacy Policy</Typography>
                    <Typography variant="p" className="text">Contact Us</Typography>
                </Grid>
                <Grid 
                    container 
                    direction="row"
                    justifyContent="flex-end"
                    alignItems="center" 
                    item 
                    xs={4} 
                    className="social-media"
                >
                    <Typography variant="p" className="text">Follow</Typography>
                    <Box>
                        <FacebookIcon/>
                    </Box>
                    <Box sx={{
                        paddingLeft: 2
                    }}>
                        <TwitterIcon/>
                    </Box>
                </Grid>
            </Grid>
        </Grid>
    );
}
 
export default Footer;