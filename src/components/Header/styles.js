const styles = theme => ({
  navHeader: {
    background: 'transparent',
    boxShadow: 'none',
    '&:hover .MuiListItem-button': {
      background: 'transparent',
    },
  },
  hasPortfolio: {
    backgroundColor: theme.palette.type === 'dark' ? '#0D0E14' : '#fff',
  },
  navDisplayFlex: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 0,
    paddingBottom: 0,
  },
  mobileMenu: {
    width: 250,
  },
  beefy: {
    display: 'flex',
    paddingTop: '4px',
    letterSpacing: 'unset',
    alignItems: 'center',
    justifyContent: 'center',
    '&,& .MuiButton-root': {
      fontSize: '20px',
      fontWeight: '700',
      borderRadius: '3px',
      textTransform: 'none',
      whiteSpace: 'nowrap',
      textDecoration: 'none',
      '&:hover, &:focus': {
        color: theme.palette.text.primary,
        background: 'transparent',
      },
    },
    '& a': {
      marginLeft: '10px',
    },
    '& img': {
      height: '24px',
    },
  },
  btnLaunchApp: {
    borderRadius: '30px',
    textTransform: 'none',
    fontWeight: 'bold',
    padding: '5px 15px 5px',
    border: 'solid 2px #54995C',
    backgroundColor: '#54995C',
    color: 'white',
    '&:hover': {
      backgroundColor: 'transparent',
      color: '#54995C',
    },
  },
});

export default styles;
