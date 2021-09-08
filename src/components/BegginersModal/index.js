import React from 'react';
import { withStyles, makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import styles from './styles';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles(styles);

const styles2 = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles2)(props => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon fontSize="large" />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles(theme => ({
  root: {
    padding: '50px 100px 100px',
  },
}))(MuiDialogContent);

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button size="lg" className={classes.btnOpenModal} onClick={handleClickOpen}>
        Begginer's Guide
      </Button>
      <Dialog
        maxWidth="xl"
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        fullScreen={fullScreen}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose} />
        <DialogContent py={5}>
          <Box my={5} textAlign="center">
            <Typography variant="h4" className={classes.bold}>
              What is Yield Farming ?
            </Typography>
            <Typography variant="h6" className={classes.text}>
              Yield farming is a hands-on way to generate interest with your crypto. Beefy is a
              yield farming optimizer that does all that for you.The results are safe, automated and
              decentralized investments with spectacular ROI, for very little effort.
            </Typography>
          </Box>
          <Box my={5} textAlign="center" display="flex" justifyContent="center">
            <Grid container spacing={4}>
              <Grid className={classes.withArrow} item xs={12} md={4}>
                <Box mx={5}>
                  <Typography variant="h6" className={classes.bold}>
                    Get Some Tokens
                  </Typography>
                  <Typography variant="body" className={classes.text}>
                    Whatever tokens you choose, Beefy is the best place to put your assets to work
                  </Typography>
                </Box>
                <img height={20} alt="arrow" src={require('images/arrow.svg').default} />
              </Grid>
              <Grid className={classes.withArrow} item xs={12} md={4}>
                <Box mx={5}>
                  <Typography variant="h6" className={classes.bold}>
                    Deposit on Beefy
                  </Typography>
                  <Typography variant="body" className={classes.text}>
                    When you store your tokens in our vaults, we find ways to add compound interest
                  </Typography>
                </Box>
                <img height={20} alt="arrow" src={require('images/arrow.svg').default} />
              </Grid>
              <Grid item xs={12} md={4}>
                <Box mx={5}>
                  <Typography variant="h6" className={classes.bold}>
                    Admire your yield
                  </Typography>
                  <Typography variant="body" className={classes.text}>
                    We auto-sell the reward tokens you earn, to buy you more of what you staked,
                    amplifying your yield
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Box textAlign="center">
            <Button size="lg" className={classes.btnOpenModal}>
              Lean More
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </div>
  );
}
