import React from 'react';
import { makeStyles, Box, Container, Typography, Button, Divider } from '@material-ui/core';
import Header from 'components/Header';
import BegginersModal from 'components/BegginersModal';
import styles from './styles';

const useStyles = makeStyles(styles);

const Hero = () => {
  const classes = useStyles();
  const stats = [
    { key: 1, value: '$545.5M', caption: 'TVL' },
    { key: 2, value: '$4.5M', caption: 'Total Rewards paid' },
    { key: 3, value: '$150.5M', caption: 'Market cap' },
  ];
  return (
    <>
      <Box className={classes.root}>
        <Header isNightMode={false} />
        <Container maxWidth="md" className={classes.content}>
          <Box py={1} className={classes.center}>
            <img className={classes.bifi} alt="BIFI" src={require('images/BIFI.svg').default} />
          </Box>
          <Box py={2} className={classes.center}>
            <img height={40} alt="BIFI" src={require('images/beefy-finance.svg').default} />
          </Box>
          <Box py={1} textAlign="center" className={classes.center}>
            <Typography variant="h4" className={classes.title}>
              Multichain yield optimiser
            </Typography>
          </Box>
          <Box py={2} className={classes.networks}>
            <img alt="BSC" src={require('images/networks/BSC.png').default} />
            <img alt="AVAX" src={require('images/networks/AVAX.png').default} />
            <img alt="HECO" src={require('images/networks/HECO.png').default} />
            <img alt="POLY" src={require('images/networks/Polygon.png').default} />
            <img alt="FTM" src={require('images/networks/Fantom.png').default} />
          </Box>
          <Box mt={4} className={classes.center}>
            <BegginersModal />
            <a
              style={{ textDecoration: 'none' }}
              rel="noreferrer"
              target="_blank"
              href="https://app.beefy.finance/"
            >
              <Button size="large" className={classes.btn}>
                Start earning
              </Button>
            </a>
          </Box>
          <Box my={6} className={classes.stats}>
            {stats.map(stat => {
              return (
                <Box key={stat.key} py={1} textAlign="center">
                  <Typography variant="h4" className={classes.bold}>
                    {stat.value}
                  </Typography>
                  <Typography variant="caption">{stat.caption}</Typography>
                </Box>
              );
            })}
          </Box>
          <Divider />
        </Container>
      </Box>
    </>
  );
};

export default Hero;
