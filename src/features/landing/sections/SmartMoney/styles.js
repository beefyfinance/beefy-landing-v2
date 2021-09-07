const styles = theme => ({
  root: {
    minHeight: '50vh',
  },
  content: {
    padding: '50px 0px',
  },
  bold: {
    fontWeight: 900,
    fontStyle: 'bold',
  },
  bifiCow: {
    boxShadow: '0px 0px 15px 5px #2B100A26',
    padding: '5px',
    borderRadius: '16px',
    display: 'flex',
    justifyContent: 'center',
    alingItems: 'center',
    maxWidth: '57px',
    '& img': {
      height: '48px',
    },
  },
  center: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardCenter: {
    boxShadow: '0px 0px 30px 0px #2B100A26',
    background: '#FFFFFF',
    padding: '10px 20px',
    zIndex: 1,
    display: 'flex',
    justifyContent: 'center',
    alingItems: 'center',
    textAlign: 'center',
    maxWidth: '300px',
    borderRadius: '20px',
  },
  card: {
    display: 'flex',
    justifyContent: 'center',
    alingItems: 'center',
    textAlign: 'center',
    backgounrd: '#FFFFFF !important',
    maxWidth: '300px',
    maxHeight: '320px',
    minHeight: '320px',
    padding: '10px 20px',
    borderRadius: '20px',
    '& .MuiCardActions-root': {
      alignItems: 'flex-end',
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
  circle: {
    backgroundColor: '#34D04D',
    margin: '0 5px',
    height: '10px',
    width: '10px',
    borderRadius: '50%',
    display: 'inline-block',
  },
  hoverIcon: {
    '&:hover': {
      fill: 'white',
    },
  },
});

export default styles;
