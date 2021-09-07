const styles = theme => ({
  root: {
    padding: '100px 100px',
  },
  btnOpenModal: {
    textTransform: 'none',
    borderRadius: '30px',
    fontWeight: 'bold',
    padding: '5px 15px 5px',
    border: 'solid 2px #54995C',
    margin: '0 10px',
    color: '#54995C',
    '&:hover': {
      backgroundColor: '#54995C',
      color: 'white',
    },
  },
  bold: {
    fontWeight: 900,
    fontStyle: 'bold',
  },
  text: {
    color: '#6E675D',
  },
  withArrow: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
      '& img': {
        transform: 'rotate(90deg)',
        marginTop: theme.spacing(4),
      },
    },
  },
});

export default styles;
