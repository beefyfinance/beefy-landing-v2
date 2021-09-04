import React from 'react';
import { Button, makeStyles } from '@material-ui/core';

const styles = theme => ({
  btn: {
    textTransform: 'none',
    borderRadius: '30px',
    fontWeight: 'bold',
    padding: '5px 15px 5px',
    border: props => `solid 2px ${props.color}`,
    margin: '0 10px',
    color: props => props.color,
    '&:hover': {
      backgroundColor: props => props.color,
      color: 'white',
      '&:svg': {
        fill: 'white',
      },
    },
    '& img': {
      height: '16px',
      padding: '0 5px',
    },
    '& svg': {
      margin: '0 5px',
    },
  },
});

const useSyles = makeStyles(styles);

const OutlinedButton = props => {
  const classes = useSyles(props);
  return (
    <Button {...props} className={classes.btn}>
      {props.children}
    </Button>
  );
};

export default OutlinedButton;
