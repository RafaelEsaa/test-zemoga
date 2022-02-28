import React from 'react';
import { Grid, Box, Typography, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import ThumbsDownIcon from '../assets/img/ThumbsDown';
import ThumbsUpIcon from '../assets/img/ThumbsUp';

const useStyles = makeStyles({
    containerCard: {
        height: 170,
        background: '#EBEBEB',
        position: 'relative',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        '& .container': {
            padding: '16px 35.69px',
            position: 'absolute',
            bottom: 0
        },
    },
    shadow: {
        background: 'linear-gradient(90deg, rgba(0, 0, 0, 0.0001) 0%, #888888 19.79%, #666666 50%, rgba(51, 51, 51, 0.6) 71.88%)',
        width: '100%',
        height: '100%',
        position: 'absolute',
    },
    containerMessage: {
        zIndex: 1,
    },
    barBottomVotes: {
        position: 'absolute',
        bottom: 0, 
        width: '100%',
        '& .sect-btn-up': {
            display: 'flex',
            alignItems: 'center',
            paddingLeft: 6,
            '& .porcent': {
                fontSize: 18,
                fontWeight: 400,
                color: '#fff',
                paddingLeft: 5
            }
        },
        '& .sect-btn-down': {
            display: 'flex',
            alignItems: 'center',
            paddingRight: 6,
            justifyContent: 'end',
            '& .porcent': {
                fontSize: 18,
                fontWeight: 400,
                color: '#fff',
                paddingRight: 5
            }
        }
    },
    artist: {
        fontSize: '36px !important',
        fontWeight: 400,
        color: '#fff'
    },
    text: {
        fontSize: 18,
        fontWeight: 400,
        color: '#fff'
    },
    sectArtist: {
        paddingTop: 15
    },
    sectVotes: {
        padding: 14,
        '& p': {
            color: '#fff'
        }
    },
    sectBtns: {
        paddingTop: 12,
        '& .btn-vote': {
            height: 38,
            padding: 19,
            marginLeft: 12,
            background: 'rgba(48, 48, 48, 0.6)',
            border: '1px solid #FFFFFF',
            borderRadius: 0,
            fontSize: 15,
            textTransform: 'capitalize',
            color: 'white !important'
        },
        '& .btn-up': {
            background: '#3CBBB4',
            width: 30,
            height: 30,
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        '& .btn-down': {
            background: '#FBBD4A',
            width: 30,
            height: 30,
            marginLeft: 12,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }
    }
});

const CardList = ({ artist }) => {
    const classes = useStyles();

    return (
        <Grid container className={classes.containerCard} style={{
            backgroundImage: `url(${require(`../assets/img/${artist.picture}`)})`,
        }}>
            <Grid container className={classes.containerMessage}>
                <Grid item xs={3} md={3}>
                </Grid>
                <Grid item xs={6} md={5} className={classes.sectArtist}>
                    <Typography variant="h1" className={classes.artist}>{artist.name}</Typography>
                    <Typography variant="p" className={classes.text}>{artist.description.substring(0,75)}...</Typography>
                </Grid>
                <Grid item xs={3} md={4} className={classes.sectVotes}>
                    <Typography variant="p" align="right">24 days ago in Business</Typography>
                    <Grid>
                        <Grid
                            container
                            direction="row"
                            justifyContent="flex-end"
                            alignItems="center"
                            className={classes.sectBtns}
                        >
                            <Grid className='btn-up'>
                                <ThumbsUpIcon/>
                            </Grid>
                            <Grid className='btn-down'>
                                <ThumbsDownIcon/>
                            </Grid>
                            <Button variant="text" className="btn-vote">Vote Now</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid className={classes.shadow}/>
            <Grid className={classes.barBottomVotes}>
                <Box sx={{
                    display: 'flex',
                }}>
                    <Grid className="sect-btn-up" style={{ width: '40%', background: 'rgba(60, 187, 180, 0.6)', height: 54 }}>
                        <ThumbsUpIcon/>
                        <Typography variant="p" className="porcent">25%</Typography>
                    </Grid>
                    <Grid className="sect-btn-down" style={{ width: '60%', background: 'rgba(249, 173, 29, 0.6)', height: 54 }}>
                        <Typography variant="p" className="porcent">75%</Typography>
                        <ThumbsDownIcon/>
                    </Grid>
                </Box>
            </Grid>
        </Grid>
    );
}

export default CardList;