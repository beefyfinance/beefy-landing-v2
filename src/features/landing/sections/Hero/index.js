import React from 'react';
import { makeStyles, Box, Container, Typography, Button, Divider } from '@material-ui/core';
import Header from 'components/Header';
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
      <Box mb={2} className={classes.root}>
        <Header isNightMode={false} />
        <Container maxWidth="md" className={classes.content}>
          <Box py={1} className={classes.center}>
            <img height={60} alt="BIFI" src={require('images/BIFI.svg').default} />
          </Box>
          <Box py={2} className={classes.center}>
            <img height={40} alt="BIFI" src={require('images/beefy-finance.svg').default} />
          </Box>
          <Box py={1} textAlign="center" className={classes.center}>
            <Typography variant="h4" className={classes.title}>
              Multichain yield optimiser
            </Typography>
          </Box>
          <Box mt={4} className={classes.center}>
            <Button size="large" className={classes.btn2}>
              Beginners guide
            </Button>
            <Button size="large" className={classes.btn}>
              Start earning
            </Button>
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
