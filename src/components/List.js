import React from 'react';
import { makeStyles } from '@mui/styles';
import { Grid } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import Card from './Card';
import CardList from './CardList';

const useStyles = makeStyles({
    containerList: {
        padding: '36px 0px'
    }
});

const List = ({ typeList }) => {
    const classes = useStyles();
    const listUser = useSelector(state => state.artists.list);

    const renderListItem = (list) => {
        return (
            typeList === 1 ? (
                <Grid container className={classes.containerList} rowSpacing={{ xs: 4 }} columnSpacing={{ xs: 1, sm: 2, md: 4 }}>
                    {list.map((item, key) => (
                        <Grid key={key} item xs={12} md={6} lg={4}>
                            <Card artist={item}/>
                        </Grid>    
                    ))}
                </Grid>
            ) : (
                <Grid container className={classes.containerList} rowSpacing={{ xs: 5 }} columnSpacing={{ xs: 1, sm: 2, md: 4 }}>
                    {list.map((item, key) => (
                        <Grid container key={key} item xs={12}>
                            <CardList artist={item}/>
                        </Grid>
                    ))}
                </Grid>
            )
        )
    }

    return (
        listUser ? renderListItem(listUser) : null
    );
}
 
export default List;