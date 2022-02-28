import React, { useEffect, useState, Fragment } from 'react';
import { makeStyles } from '@mui/styles';
import { Grid, Box, Typography, Button } from '@mui/material';
import ThumbsUpIcon from '../assets/img/ThumbsUp';
import ThumbsDownIcon from '../assets/img/ThumbsDown';
import { useDispatch } from 'react-redux';
import { upVoteByArtist, downVoteByArtist } from '../store/slices/artists';

const useStyles = makeStyles((theme) => ({
    containerCard: {
        height: 348,
        background: '#EBEBEB',
        position: 'relative',
        '& .container': {
            padding: '16px 35.69px',
            position: 'absolute',
            bottom: 36
        }
    },
    artist: {
        fontSize: 36,
        [theme.breakpoints.down('md')]: {
            fontSize: 30
        },
        fontWeight: 400,
        color: '#fff'
    },
    text: {
        fontSize: 15,
        fontWeight: 400,
        paddingTop: 7,
        color: '#fff'
    },
    date: {
        fontSize: 12,
        fontWeight: 700,
        paddingTop: 12,
        color: '#fff'
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
    middleViewIcon: {
        position: 'absolute',
        left: 0,
        top: '50%',
        padding: 7,
        background: '#FBBD4A'
    },
    sectBtns: {
        paddingTop: 12,
        '& .btn-vote': {
            height: 38,
            padding: 19,
            marginLeft: 12,
            border: '1px solid #FFFFFF',
            borderRadius: 0,
            fontSize: 15,
            textTransform: 'capitalize',
            color: 'white !important',
            background: 'rgba(48, 48, 48, 0.6)',
            '&:hover': {
                cursor: 'pointer'
            },
            '&:disabled': {
                background: 'rgba(0, 0, 0, 0.6)'
            }
        },
        '& .btn-up-marked': {
            border: '2px solid white',
            background: '#3CBBB4',
            width: 30,
            height: 30,
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            '&:hover': {
                cursor: 'pointer'
            }
        },
        '& .btn-up': {
            background: '#3CBBB4',
            width: 30,
            height: 30,
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            '&:hover': {
                cursor: 'pointer'
            }
        },
        '& .btn-down-marked': {
            border: '2px solid white',
            background: '#FBBD4A',
            width: 30,
            height: 30,
            marginLeft: 12,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            '&:hover': {
                cursor: 'pointer'
            }
        },
        '& .btn-down': {
            background: '#FBBD4A',
            width: 30,
            height: 30,
            marginLeft: 12,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            '&:hover': {
                cursor: 'pointer'
            }
        }
    }
}));

const Card = ({ artist }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [countVotePositive, setCountVotePositive] = useState(0);
    const [countVoteNegative, setCountVoteNegative] = useState(0);
    const [votePositiveMarked, setVotePositiveMarked] = useState(false);
    const [voteNegativeMarked, setVoteNegativeMarked] = useState(false);
    const [vote, setVote] = useState(false)

    useEffect(() => {
        if (artist.votes) {
            const countVotes = artist.votes.positive + artist.votes.negative;
            const porcentPositive = (artist.votes.positive * 100) / countVotes;
            const porcentNegative = (artist.votes.negative * 100) / countVotes;
            setCountVoteNegative(porcentNegative);
            setCountVotePositive(porcentPositive);
        }
    }, [artist])

    const handleUpVote = () => {
        setVotePositiveMarked(!votePositiveMarked);
    }

    const handleDownVote = () => {
        setVoteNegativeMarked(!voteNegativeMarked);
    }

    const handleVote = () => {
        if (votePositiveMarked) {
            dispatch(upVoteByArtist(artist));
            setVote(true);
            setVotePositiveMarked(false);
        } else {
            dispatch(downVoteByArtist(artist));
            setVote(true);
            setVoteNegativeMarked(false);
        }
    }

    const handleVoteAgain = () => {
        setVotePositiveMarked(false);
        setVoteNegativeMarked(false);
        setVote(false);
    }

    return (
        <Grid className={classes.containerCard} style={{
            backgroundImage: `url(${require(`../assets/img/${artist.picture}`)})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center center'
        }}>
            <Grid className={classes.middleViewIcon}>
                <ThumbsUpIcon/>
            </Grid>
            <Grid className="container">
                <Typography variant="p" className={classes.artist}>{artist.name}</Typography>
                <Typography variant="p" className={classes.text}>{artist.description.substring(0,35)}...</Typography>
                <Typography variant="p" align="right" className={classes.date}>{vote ? 'Thank you for your vote' : artist.lastUpdated}</Typography>
                <Grid>
                    <Grid
                        container
                        direction="row"
                        justifyContent="flex-end"
                        alignItems="center"
                        className={classes.sectBtns}
                    >
                        {vote ? (
                            <Grid/>
                        ) : (
                            <Fragment>
                                <Grid className={`${votePositiveMarked ? 'btn-up-marked' : 'btn-up'}`} onClick={() => handleUpVote()}>
                                    <ThumbsUpIcon/>
                                </Grid>
                                <Grid className={`${voteNegativeMarked ? 'btn-down-marked' : 'btn-down'}`} onClick={() => handleDownVote()}>
                                    <ThumbsDownIcon/>
                                </Grid>
                            </Fragment>
                        )}
                        {voteNegativeMarked || votePositiveMarked ? (
                            <Button variant="text" className="btn-vote" onClick={() => handleVote()}>Vote Now</Button>
                            ) : (
                            vote ? (
                                <Button variant="text" className="btn-vote" onClick={() => handleVoteAgain()}>Vote Again</Button>
                            ) : (
                                <Button disabled variant="text" className="btn-vote">Vote Now</Button>
                            )
                        )}
                    </Grid>
                </Grid>
            </Grid>
            <Grid className={classes.barBottomVotes}>
                <Box sx={{
                    display: 'flex',
                }}>
                    <Grid className="sect-btn-up" style={{ width: `${countVotePositive}%`, background: 'rgba(60, 187, 180, 0.6)', height: 36 }}>
                        <ThumbsUpIcon/>
                        <Typography variant="p" className="porcent">{countVotePositive.toFixed(2)}%</Typography>
                    </Grid>
                    <Grid className="sect-btn-down" style={{ width: `${countVoteNegative}%`, background: 'rgba(249, 173, 29, 0.6)', height: 36}}>
                        <Typography variant="p" className="porcent">{countVoteNegative.toFixed(2)}%</Typography>
                        <ThumbsDownIcon/>
                    </Grid>
                </Box>
            </Grid>
        </Grid>
    );
}

export default Card;