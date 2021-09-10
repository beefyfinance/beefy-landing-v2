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
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();
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
        {t('Btn-Begginers')}
      </Button>
      <Dialog
        maxWidth="lg"
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        fullScreen={fullScreen}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose} />
        <DialogContent py={5}>
          <Box my={5} textAlign="center">
            <Box py={4}>
              <Typography variant="h4" className={classes.bold}>
                {t('Modal-Title')}
              </Typography>
            </Box>
            <Typography variant="h6" className={classes.text}>
              {t('Modal-Content')}
            </Typography>
          </Box>
          <Box my={5} textAlign="center" display="flex" justifyContent="center">
            <Grid container>
              <Grid className={classes.withArrow} item xs={12} md={4}>
                <Box mx={5}>
                  <Typography variant="h6" className={classes.bold}>
                    {t('Modal-Item-Title-1')}
                  </Typography>
                  <Typography variant="body" className={classes.text}>
                    {t('Modal-Item-Content-1')}
                  </Typography>
                </Box>
                <img height={20} alt="arrow" src={require('images/arrow.svg').default} />
              </Grid>
              <Grid className={classes.withArrow} item xs={12} md={4}>
                <Box mx={5}>
                  <Typography variant="h6" className={classes.bold}>
                    {t('Modal-Item-Title-2')}
                  </Typography>
                  <Typography variant="body" className={classes.text}>
                    {t('Modal-Item-Content-2')}
                  </Typography>
                </Box>
                <img height={20} alt="arrow" src={require('images/arrow.svg').default} />
              </Grid>
              <Grid item xs={12} md={4}>
                <Box mx={5}>
                  <Typography variant="h6" className={classes.bold}>
                    {t('Modal-Item-Title-3')}
                  </Typography>
                  <Typography variant="body" className={classes.text}>
                    {t('Modal-Item-Content-3')}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Box className={classes.btnSection}>
            <a
              style={{ textDecoration: 'none' }}
              rel="noreferrer"
              target="_blank"
              href="https://docs.beefy.finance/beefyfinance/"
            >
              <Button size="lg" className={classes.btnOpenModal}>
                {t('Btn-LeanMore')}
              </Button>
            </a>
          </Box>
        </DialogContent>
      </Dialog>
    </div>
  );
}
