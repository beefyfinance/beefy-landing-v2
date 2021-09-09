import React from 'react';
import { makeStyles, Box, Container, Typography, Button, Divider } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import Header from 'components/Header';
import BegginersModal from 'components/BegginersModal';
import styles from './styles';

const useStyles = makeStyles(styles);

const Hero = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const stats = [
    { key: 1, value: '$545.5M', caption: t('TVL') },
    { key: 2, value: '$4.5M', caption: t('Total-Rewards') },
    { key: 3, value: '$150.5M', caption: t('Market-cap') },
  ];
  return (
    <>
      <Box className={classes.root}>
        <Header isNightMode={false} />
        <Container maxWidth="md" className={classes.content}>
          <Box py={1} className={classes.center}>
            <img className={classes.bifi} alt="BIFI" src={require('images/BIFI.svg').default} />
          </Box>
          <Box className={classes.center}>
            <img height={60} alt="BIFI" src={require('images/beefy-finance.svg').default} />
          </Box>
          <Box py={1} textAlign="center" className={classes.center}>
            <Typography variant="h4" className={classes.title}>
              {t('Hero-Multichain')}
            </Typography>
          </Box>
          <Box py={2} className={classes.networks}>
            <img alt="BSC" src={require('images/networks/BSC-1.svg').default} />
            <img alt="AVAX" src={require('images/networks/AVAX-1.svg').default} />
            <img alt="HECO" src={require('images/networks/HECO-1.svg').default} />
            <img alt="POLY" src={require('images/networks/Polygon-1.svg').default} />
            <img alt="FTM" src={require('images/networks/Fantom-1.svg').default} />
            <img alt="ONE" src={require('images/networks/Harmony.svg').default} />
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
                {t('Btn-StartEarning')}
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
                  <Typography className={classes.text} variant="caption">
                    {stat.caption}
                  </Typography>
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
