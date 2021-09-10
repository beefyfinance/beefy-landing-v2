import React from 'react';
import chartData from 'helpers/chartData';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles, Container, Box, Typography } from '@material-ui/core';
import Item from 'components/Item';
import BigNumber from 'bignumber.js';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import reduxActions from 'redux/actions';

import { isEmpty } from 'helpers/utils';
import buildUserEarnedTokenMap from 'helpers/buildUserEarnedTokenMap';

import styles from './styles';

const useStyles = makeStyles(styles);

const defaultFilter = {
  key: 'default',
  direction: 'desc',
  keyword: '',
  retired: false,
  zero: false,
  deposited: false,
  boost: false,
  platform: 'all',
  vault: 'all',
  blockchain: 'all',
  category: 'all',
};

const Vaults = () => {
  const { vault, wallet, prices, balance } = useSelector(state => ({
    vault: state.vaultReducer,
    wallet: state.walletReducer,
    prices: state.pricesReducer,
    balance: state.balanceReducer,
  }));

  const dispatch = useDispatch();
  const classes = useStyles();
  const [, setVaultCount] = React.useState({ showing: 0, total: 0 });
  const storage = localStorage.getItem('homeSortConfig');
  const [sortConfig] = React.useState(storage === null ? defaultFilter : JSON.parse(storage));
  const [filtered, setFiltered] = React.useState([]);
  const [scrollable, setScrollable] = React.useState({ items: [], hasMore: true, chunk: 3 });
  const [userEarnedTokenMap, setUserEarnedTokenMap] = React.useState({});

  React.useEffect(() => {
    localStorage.setItem('homeSortConfig', JSON.stringify(sortConfig));

    let data = [];

    // TODO: extract helper fn?
    const sorted = items => {
      const key = sortConfig.key;
      const direction = sortConfig.direction === 'desc' ? -1 : 1;

      let fn;

      if (key === 'name') {
        fn = (a, b) => a[key].localeCompare(b[key]);
      } else if (key === 'apy') {
        fn = (a, b) => a[key].totalApy - b[key].totalApy;
      } else if (key === 'tvl') {
        fn = (a, b) => new BigNumber(a[key]).comparedTo(b[key]);
      } else if (key === 'safetyScore') {
        fn = (a, b) => a[key] - b[key];
      } else {
        fn = () => 0;
      }

      return items.sort((a, b) => fn(a, b) * direction);
    };

    // TODO: extract helper fn?
    const check = item => {
      if (sortConfig.retired) {
        if (item.status !== 'eol') {
          return false;
        }
      } else {
        if (item.status === 'eol') {
          return false;
        }
      }

      if (sortConfig.category !== 'all' && !item.tags.includes(sortConfig.category)) {
        return false;
      }

      if (!item.name.toLowerCase().includes(sortConfig.keyword)) {
        return false;
      }

      if (sortConfig.zero && BigNumber(balance.tokens[item.token].balance).eq(0)) {
        return false;
      }

      if (sortConfig.deposited && !(item.earnedToken in userEarnedTokenMap)) {
        return false;
      }

      if (sortConfig.boost && !item.boost) {
        return false;
      }

      if (
        sortConfig.platform !== 'all' &&
        (isEmpty(item.platform) || sortConfig.platform !== item.platform.toLowerCase())
      ) {
        return false;
      }

      if (sortConfig.vault !== 'all' && sortConfig.vault !== item.vaultType) {
        return false;
      }

      if (sortConfig.blockchain !== 'all' && item.network !== sortConfig.blockchain) {
        return false;
      }

      return item;
    };

    for (const [, item] of Object.entries(vault.pools)) {
      if (check(item)) {
        data.push(item);
      }
    }

    if (sortConfig !== null) {
      data = sorted(data);
    }

    setVaultCount({ showing: data.length, total: Object.entries(vault.pools).length });
    setFiltered(data);
    setScrollable(scrollable => {
      return {
        ...scrollable,
        ...{ items: data.slice(0, scrollable.chunk), hasMore: data.length > scrollable.chunk },
      };
    });
  }, [sortConfig, vault.pools, userEarnedTokenMap, balance]);

  React.useEffect(() => {
    if (wallet.address && vault.lastUpdated > 0) {
      dispatch(reduxActions.balance.fetchBalances());
    }
  }, [dispatch, wallet.address, vault.lastUpdated]);

  React.useEffect(() => {
    if (prices.lastUpdated > 0) {
      dispatch(reduxActions.vault.fetchPools());
    }
  }, [dispatch, prices.lastUpdated]);

  React.useEffect(() => {
    if (wallet.address && vault.lastUpdated > 0 && balance.lastUpdated) {
      const userEarnedTokenMap = buildUserEarnedTokenMap(vault.pools, balance.tokens);
      setUserEarnedTokenMap(userEarnedTokenMap);
    } else {
      setUserEarnedTokenMap({});
    }
  }, [wallet.address, vault.lastUpdated, balance.lastUpdated, vault.pools, balance.tokens]);

  React.useEffect(() => {
    setInterval(() => {
      dispatch(reduxActions.vault.fetchPools());
    }, 60000);
  }, [dispatch]);

  const { t } = useTranslation();
  const theme = useTheme();
  const containerWidth = useMediaQuery(theme.breakpoints.down('sm')) ? 'xs' : 'md';

  return (
    <Box my={4} className={classes.root}>
      <Container maxWidth={containerWidth}>
        <Box textAlign="center">
          <Typography className={classes.bold} variant="h4">
            {t('Vaults-Title')}
          </Typography>
        </Box>
        {isEmpty(filtered) ? (
          ''
        ) : (
          <>
            {scrollable.items.map(item => (
              <Item
                key={item.id}
                item={item}
                chartData={chartData(prices.historicalApy, prices.ApyLoader, item.id)}
              />
            ))}
          </>
        )}
      </Container>
    </Box>
  );
};

export default Vaults;
