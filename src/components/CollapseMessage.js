import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Collapse, Grid, Box } from '@mui/material';
import CloseIcon from '../assets/img/CloseIcon'

const useStyles = makeStyles({
  containerCollapse: {
    padding: 22,
    background: '#EBEBEB'
  }
});

const CollapseMessage = ({ open, children, onChange, className }) => {
    const classes = useStyles();
  console.log(className)
    const [openMessage, setOpenMessage] = useState(open);

    const handleChangeCollapse = () => {
        console.log('llego aqui: ', openMessage)
        setOpenMessage(!openMessage)
        onChange(!openMessage)
    }

    return (
      <Grid style={{ margin: openMessage ? '36px 0px' : 0 }}>
        <Collapse in={openMessage}>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="flex-start"
            className={classes.containerCollapse}
          >
            {children}
            <Box component="span" onClick={() => handleChangeCollapse()}>
              <CloseIcon />
            </Box>
          </Grid>
        </Collapse>
      </Grid>
    );
}
 
export default CollapseMessage;