import React from 'react';
import chartData from 'helpers/chartData';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles, Container, Box, Typography } from '@material-ui/core';
import Item from 'features/home/components/Item';
import styles from './styles';

const useStyles = makeStyles(styles);

const Vaults = () => {
  const classes = useStyles();

  const { vault, prices } = useSelector(state => ({
    vault: state.vaultReducer,
    prices: state.pricesReducer,
  }));
  return (
    <Box my={2} className={classes.root}>
      <Container maxWidth="md">
        <Box textAlign="center">
          <Typography className={classes.bold} variant="h4">
            Featured vaults
          </Typography>
        </Box>
        {vault.pools.map(item => (
          <Item
            key={item.id}
            item={item}
            chartData={chartData(prices.historicalApy, prices.ApyLoader, item.id)}
          />
        ))}
      </Container>
    </Box>
  );
};

export default Vaults;
