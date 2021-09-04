import React from 'react';
import { makeStyles, Box } from '@material-ui/core';

const styles = theme => ({
  plains: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '20vh',
    overflow: 'hidden',
    zIndex: 0,
  },
  plainLeft: {
    position: 'fixed',
    bottom: '-30rem',
    left: '-22.5rem',
    width: '37.5rem',
    height: '35.5rem',
    borderRadius: ' 50%',
    backgroundColor: '#76BF94',
  },
  plainCenter: {
    position: 'fixed',
    bottom: '-17.25rem',
    left: '-18.75vw',
    width: '100vw',
    height: '20.5rem',
    borderRadius: '50%',
    backgroundColor: '#549970',
  },
  plainCenter2: {
    position: 'fixed',
    bottom: '-17.25rem',
    right: '-11.5vw',
    width: '75vw',
    height: '20.5rem',
    borderRadius: '50%',
    backgroundColor: '#76BF94',
  },
  plainRight: {
    position: 'fixed',
    bottom: '-34.5rem',
    right: '-30rem',
    width: '45rem',
    height: '42rem',
    borderRadius: '50%',
    backgroundColor: '#549970',
  },
});

const useStyles = makeStyles(styles);

const Bg = () => {
  const classes = useStyles();
  return (
    <Box className={classes.plains}>
      <Box className={classes.plainLeft} />
      <Box className={classes.plainCenter} />
      <Box className={classes.plainCenter2} />
      <Box className={classes.plainRight} />
    </Box>
  );
};

export default Bg;
