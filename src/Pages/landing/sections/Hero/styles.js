const styles = theme => ({
  root: {
    minHeight: '60vh',
  },
  content: {
    padding: '100px 20px',
  },
  center: {
    display: 'flex',
    justifyContent: 'center',
    alignItem: 'center',
  },
  title: {
    fontSize: '2rem',
    fontStyle: 'bold',
    fontWeight: '900',
    fontStrech: 'bold',
  },
  bold: {
    fontSize: '2rem',
    fontWeight: '900',
    fontStyle: 'bold',
    fontStrech: 'bold',
  },
  caption: {
    color: '#A69885',
  },
  stats: {
    display: 'flex',
    justifyContent: 'space-around',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },
  btn: {
    borderRadius: '30px',
    fontWeight: 'bold',
    padding: '5px 15px 5px',
    border: 'solid 2px #54995C',
    backgroundColor: '#54995C',
    textTransform: 'none',
    margin: '0 10px',
    color: 'white',
    '&:hover': {
      backgroundColor: 'transparent',
      color: '#54995C',
    },
  },
  networks: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    '& img': {
      height: '30px',
      '&:hover': {
        transition: '0.5s',
        transform: 'scale(1.3)',
      },
    },
  },
  bifi: {
    height: '60px',
    '&:hover': {
      transition: '0.5s',
      transform: 'scale(1.3)',
    },
  },
  text: {
    color: '#A69885',
  },
});

export default styles;
