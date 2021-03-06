import React, { useState, useEffect } from 'react';
import ArrowGo from '@material-ui/icons/ArrowForwardIos';
import { Button, Grid, Hidden, makeStyles, Typography, Box } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import BigNumber from 'bignumber.js';

import AssetsImage from 'components/AssetsImage';
import SafetyScore from 'components/SafetyScore';
import DisplayTags from 'components/vaultTags';
import Popover from 'components/Popover';
import { calcDaily, formatApy, formatUsd } from 'helpers/format';
import styles from './styles';
import HistoricalRateChart from '../HistoricalRateChart/HistoricalRateChart';

const useStyles = makeStyles(styles);

const Item = ({ item, chartData }) => {
  const classes = useStyles({
    muted: item.status === 'paused' || item.status === 'eol',
    hasMore3Items: item.tags.length > 2,
    isLongName: item.name.length > 15,
  });
  const t = useTranslation().t;
  const history = useHistory();
  const [hasDeposit, setHasDeposit] = useState(false);
  const balances = useSelector(state => state.balanceReducer);

  useEffect(() => {
    const mooBalance = BigNumber(balances.tokens[item.earnedToken].balance);
    if (!mooBalance.eq(0)) {
      setHasDeposit(true);
    } else {
      setHasDeposit(false);
    }
  }, [balances, item.earnedToken]);

  const itemClassNames = `${classes.itemContainer} ${hasDeposit ? 'hasDeposit' : ''}`;
  const apyContainerClassNames = `${classes.apyContainer} ${hasDeposit ? 'hasDeposit' : ''}`;

  const hasMore3Tags = item.tags.length > 2;

  return (
    <div className={itemClassNames}>
      <Grid container className={classes.dataGrid}>
        <Grid className={classes.titleContainer} item xs={12} md={4}>
          <Box className={classes.infoContainer}>
            <AssetsImage img={item.logo} assets={item.assets} alt={item.name} />
            <Typography className={classes.vaultName}>{item.name}</Typography>
            {hasMore3Tags && (
              <Box mx={1}>
                <img
                  alt={item.network}
                  src={require('images/networks/' + item.network + '.svg').default}
                />
              </Box>
            )}
          </Box>
          <Box>
            <Box className={classes.badgesContainter}>
              <Box className={classes.badges}>
                {!hasMore3Tags && (
                  <img
                    alt={item.network}
                    src={require('images/networks/' + item.network + '.svg').default}
                  />
                )}
                <DisplayTags tags={item.tags} />
              </Box>
              {hasMore3Tags ? (
                <Hidden smDown>
                  <Box my={1}>
                    <Button
                      onClick={() => history.push('/' + item.network + '/vault/' + item.id)}
                      className={classes.btnSeeDetails}
                    >
                      See Details <ArrowGo style={{ fontSize: 12 }} />
                    </Button>
                  </Box>
                </Hidden>
              ) : (
                <Box my={1}>
                  <Button
                    onClick={() => history.push('/' + item.network + '/vault/' + item.id)}
                    className={classes.btnSeeDetails}
                  >
                    See Details <ArrowGo style={{ fontSize: 12 }} />
                  </Button>
                </Box>
              )}
            </Box>
          </Box>
        </Grid>
        <Grid className={classes.centerSpace} item xs={12} md={2}>
          <div className={classes.stat}>
            <SafetyScore score={item.safetyScore} whiteLabel size="sm" />
            <Box className={classes.safetyLabel}>
              <Typography className={classes.label}>{t('Safety-Score')}</Typography>
              <Box ml={0.5}>
                <Popover solid title={t('Safety-ScoreWhat')} content={t('Safety-ScoreExpl')} />
              </Box>
            </Box>
          </div>
          <div className={classes.stat}>
            <Hidden mdUp>
              <Box className={classes.chart}>
                <HistoricalRateChart chartData={chartData} />
                <Typography className={classes.label}>{t('Vault-Chart')}</Typography>
              </Box>
            </Hidden>
          </div>
        </Grid>
        <Grid className={classes.centerSpace} item xs={12} md={4}>
          <Box className={classes.stat}>
            <Typography className={classes.value}>{formatUsd(item.tvl)}</Typography>
            <Typography className={classes.label}>{t('TVL')}</Typography>
          </Box>
          <Box className={classes.stat}>
            <Typography className={classes.value}>{calcDaily(item.apy.totalApy)}</Typography>
            <Typography className={classes.label}>{t('Vault-Daily')}</Typography>
          </Box>
        </Grid>
        <Grid className={classes.centerSpace} item xs={12} md={2}>
          <Hidden smDown>
            <Box className={classes.chart}>
              <HistoricalRateChart chartData={chartData} />
              <Typography className={classes.label}>{t('Vault-Chart')}</Typography>
            </Box>
          </Hidden>
          <Hidden mdUp>
            {hasMore3Tags && (
              <Button
                onClick={() => history.push('/' + item.network + '/vault/' + item.id)}
                className={classes.btnSeeDetails}
              >
                See Details <ArrowGo style={{ fontSize: 12 }} />
              </Button>
            )}
          </Hidden>
        </Grid>
      </Grid>
      <div className={apyContainerClassNames}>
        <Box textAlign={'center'}>
          <Typography variant={'h1'}>{formatApy(item.apy.totalApy)}</Typography>
          <Typography variant={'h2'}>{t('APY')}</Typography>
        </Box>
      </div>
    </div>
  );
};

export default Item;
