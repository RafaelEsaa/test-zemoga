import React, { useState, useEffect } from "react";
import { makeStyles } from '@mui/styles';
import { Button, Box, Grid, Typography, Select, MenuItem } from "@mui/material";
import { useSelector, useDispatch } from 'react-redux';
import PopeImg from "../assets/img/pope-francis.@2x.png";
import backgroundPeople from '../assets/img/bg-people.png';
import WikipediaIcon from '../assets/img/WikipediaIcon'
import Banner from "./Banner";
import List from "./List";
import Container from "./Container";
import CollapseMessage from "./CollapseMessage";
import { setName } from '../store/slices/artists'
import BannerCallToAction from "./BannerCallToAction";
import Footer from "./Footer";

const useStyles = makeStyles((theme) => ({
  containerBanner: {
    padding: '46px 0px 30px 171px',
  },
  question: {
    fontSize: 18
  },
  title: {
    fontSize: '54px !important',
    paddingBottom: 36,
  },
  text: {
    fontSize: '24px !important',
  },
  moreInformation: {
    padding: '20px 0px',
    '& .text': {
      fontSize: 18,
      paddingLeft: 9,
    }
  },
  veredict: {
    fontWeight: 700,
    fontSize: 27
  },
  previousTitle: {
    fontSize: '45px !important',
    fontWeight: 300,
    color: '#464646',
    [theme.breakpoints.down('lg')]: {
      fontSize: '24px !important'
    },
  },
  changeList: {
    width: 173,
    textAlign: 'center',
    borderRadius: 0,
    fontSize: 13.5,
    border: '2px solid #333333',
    '& > div': {
      [theme.breakpoints.down('lg')]: {
        padding: 7
      }
    }
  },
  collapse: {
    padding: '36px 0px'
  },
  collapseSectOne: {
    paddingRight: 17,
    '& .firstText': {
      fontSize: 18,
      fontWeight: 300
    },
    '& .secondText': {
      fontSize: 27,
      fontWeight: 700
    }
  },
  collapseSectTwo: {
    '& .text': {
      fontSize: 18,
      fontWeight: 300
    }
  },
  containerBannerCallToActionMsg: {
    zIndex: 2, 
    position: 'relative',
    margin: 'auto 0',
    '& .title': {
        fontSize: '27px !important',
        [theme.breakpoints.down('lg')]: {
          fontSize: '21px !important'
        },
        fontWeight: 400,
        color: '#464646'
    },
    '& .sect-text': {
      display: 'flex',
      alignItems: 'center'
    },
    '& .sect-btn': {
      display: 'flex',
      justifyConotent: 'center',
      '& .btn-submit': {
        borderRadius: 0,
        border: '2px solid #333333',
        background: 'transparent',
        color: '#333333',
        padding: '5% 30%',
        [theme.breakpoints.down('lg')]: {
          padding: '5% 20%',
        },
      }
    }
  },
  styleBanner: {
    position: "absolute",
    top: "50%",
    left: 171,
    [theme.breakpoints.down('lg')]: {
      left: 100
    },
    [theme.breakpoints.down('md')]: {
      left: '10%',
      width: '80%'
    },
    transform: "translateY(-50%)",
    background: 'rgba(0, 0, 0, 0.4)',
    padding: '36px 27px 37px',
    maxWidth: '550px',
    [theme.breakpoints.down('md')]: {
      left: '10%',
      maxWidth: '73%',
    },
    color : '#fff'
  }
}));

const Dashboard = () => {
  const dispatch = useDispatch();
  // const listUser = useSelector(state => state.artists.list);
  // console.log('listUser: ', listUser);
  const [valueTypeList, setValueTypeList] = useState(1);
  const [open, setOpen] = useState(true);

  const handleChangeCollapse = (value) => {
    setOpen(value)
  }

  const handleChange = (event) => {
    setValueTypeList(event.target.value);
  };

  useEffect(() => {
    dispatch(setName('fale'))
  }, [])

  const classes = useStyles();
  return (
    <Grid>
      <Banner imgBanner={PopeImg}>
          <Box className={classes.styleBanner}>
            <Typography variant="p" className={classes.question}>
              What's your opinion on
            </Typography>
            <Typography variant="h1" className={classes.title}>
              Pope Francis?
            </Typography>
            <Typography variant="h1" className={classes.text}>
              He’s talking tough on clergy sexual abuse, or is he just another pervert protector? (thumbs down) or a true pedophile punishing pontiff? (thumbs up)
            </Typography>
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="flex-start"
              className={classes.moreInformation}
            >
              <WikipediaIcon/>
              <Typography variant="p" className="text">More Information</Typography>
            </Grid>
            <Typography variant="p" className={classes.veredict}>
              What’s Your Veredict?
            </Typography>
          </Box>
      </Banner>

      <Container>
        <CollapseMessage open={open} onChange={(value) => handleChangeCollapse(value)}>
          <Grid container item xs={2} className={classes.collapseSectOne}>
            <Typography variant="p" className="firstText">
              Speak out. Be heard.
            </Typography>
            <Typography variant="p" className="secondText">
              Be counted
            </Typography>
          </Grid>
          <Grid container item xs={9} className={classes.collapseSectTwo}>
            <Typography variant="p" className="text">
              Rule of Thumb is a crowd sourced court of public opinion where anyone and everyone can speak out and speak freely. It’s easy: You share your opinion, we analyze and put the data in a public report.
            </Typography>
          </Grid>
        </CollapseMessage>

        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="h1" className={classes.previousTitle}>Previous Ruings</Typography>
          <Select
            value={valueTypeList}
            label=""
            onChange={handleChange}
            className={classes.changeList}
          >
            <MenuItem value={1}>Grid</MenuItem>
            <MenuItem value={2}>List</MenuItem>
          </Select>
        </Grid>
        <List typeList={valueTypeList}/>

        <BannerCallToAction backgroundImg={backgroundPeople}>
          <Grid container className={classes.containerBannerCallToActionMsg}>
            <Grid item xs={8} className="sect-text">
              <Typography variant="h2" className="title">Is there anyone else you would want us to add?</Typography>
            </Grid>
            <Grid item xs={4} className="sect-btn">
              <Button className="btn-submit" variant="contained" color="primary">
                Submit a name
              </Button>
            </Grid>
          </Grid>
        </BannerCallToAction>
        <Footer/>
      </Container>
    </Grid>
  );
};

export default Dashboard;
