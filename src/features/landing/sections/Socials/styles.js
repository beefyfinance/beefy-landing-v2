const styles = theme => ({
  root: {
    minHeight: '50vh',
  },
  bold: {
    fontWeight: 900,
    fontStyles: 'bold',
  },
  center: {
    display: 'flex',
    justifyContent: 'center',
    alignItem: 'center',
  },

  items: {
    '& .MuiListItem-gutters': {
      paddingLeft: 0,
      '& img': {
        height: '16px',
        width: '24px',
        paddingRight: '5px',
      },
    },
  },
  discord: {
    marginRight: '5px',
    height: '16px',
    width: '24px',
  },
});

export default styles;
