import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles, AppBar, Toolbar, Container, Box, Button } from '@material-ui/core';
import styles from './styles';
import { useLocation } from 'react-router';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles(styles);

const Header = ({ isNightMode, setNightMode }) => {
  // eslint-disable-next-line no-unused-vars
  const { t } = useTranslation();
  const history = useHistory();
  const location = useLocation();

  const classes = useStyles();

  return (
    <AppBar
      className={[classes.navHeader, location.pathname === '/' ? classes.hasPortfolio : ''].join(
        ' '
      )}
      position="static"
    >
      <Toolbar disableGutters={true}>
        <Container maxWidth="lg" className={classes.navDisplayFlex}>
          <Box className={classes.beefy}>
            <img alt="BIFI" src={require('images/BIFI.svg').default} />
            <Button
              onClick={() => {
                history.push('/');
              }}
            >
              beefy.finance
            </Button>
          </Box>
          <Box>
            <Button size="small" className={classes.btnLaunchApp}>
              Start Earning
            </Button>
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
