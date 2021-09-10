import React from 'react';
import {
  makeStyles,
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Card,
  CardContent,
  CardActions,
} from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import styles from './styles';
import OutlinedButton from 'components/OutlinedButton';
import { getWidgetData } from 'Pages/landing/utils/api';
import Github from 'components/Github';
import Discord from 'components/Discord';

const useStyles = makeStyles(styles);

const SmartMoney = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  const theme = useTheme();
  const containerWidth = useMediaQuery(theme.breakpoints.down('sm')) ? 'xs' : 'md';

  return (
    <Box className={classes.root}>
      <Container maxWidth={containerWidth} className={classes.content}>
        <Box mb={10} textAlign="center">
          <Typography variant="h4" className={classes.bold}>
            {t('Smart-Money')}
          </Typography>
        </Box>
        <Cards />
      </Container>
    </Box>
  );
};

const Cards = () => {
  const { t } = useTranslation();
  const classes = useStyles();
  const [stats, setStats] = React.useState({});

  React.useEffect(() => {
    async function FetchData() {
      const data = await getWidgetData();
      setStats(data);
    }

    FetchData();
  }, []);

  return (
    <Grid container className={classes.center} spacing={1}>
      <Grid item className={classes.center} xs={12} md={4}>
        <Card mr={2} className={classes.card}>
          <CardContent>
            <Typography className={classes.bold}>{t('Discord-Card-Title')}</Typography>
            <Box py={2} className={classes.center}>
              <Box className={classes.bifiCow}>
                <img alt="cow" src={require('images/cow.png').default} />
              </Box>
            </Box>
            <Box py={2}>
              <Typography className={classes.bold}>
                {t('Discord-Card-Members', { members: 15325 })}
              </Typography>
              <Typography>
                <span className={classes.circle} />
                {t('Discord-Card-Online', {
                  members: stats.presence_count ? stats.presence_count : 0,
                })}
              </Typography>
            </Box>
            <CardActions className={classes.center}>
              <a
                style={{ textDecoration: 'none' }}
                rel="noreferrer"
                target="_blank"
                href={stats.instant_invite}
              >
                <OutlinedButton color="#7289DA">
                  <Discord className={classes.hoverIcon} />
                  {t('Discord-Card-Btn')}
                </OutlinedButton>
              </a>
            </CardActions>
          </CardContent>
        </Card>
      </Grid>
      <Grid item className={classes.center} xs={12} md={4}>
        <Card className={classes.cardCenter}>
          <CardContent>
            <Typography className={classes.bold}>{t('Optimizin-CardTitle')}</Typography>
            <Typography py={1} variant="body2">
              {t('Optimizin-CardContent')}
            </Typography>
            <Box py={2}>
              <img alt="BIFI" src={require('images/graphs.svg').default} />
            </Box>
            <CardActions className={classes.center}>
              <Box>
                <a
                  style={{ textDecoration: 'none' }}
                  rel="noreferrer"
                  target="_blank"
                  href="https://app.beefy.finance/"
                >
                  <Button my={2} className={classes.btn}>
                    {t('Btn-StartEarning')}
                  </Button>
                </a>
                <Box py={1}>
                  <a
                    style={{ textDecoration: 'none' }}
                    rel="noreferrer"
                    target="_blank"
                    href="https://docs.beefy.finance/beefyfinance/"
                  >
                    <OutlinedButton color="#5A8E69">{t('Btn-LeanMore')}</OutlinedButton>
                  </a>
                </Box>
              </Box>
            </CardActions>
          </CardContent>
        </Card>
      </Grid>
      <Grid item className={classes.center} xs={12} md={4}>
        <Card className={classes.card}>
          <CardContent>
            <Typography className={classes.bold}>{t('Github-CardTitle')}</Typography>
            <Box py={2}>
              <Typography variant="body2">{t('Github-CardContent')}</Typography>
            </Box>
            <CardActions mt={5} className={classes.center}>
              <a
                style={{ textDecoration: 'none' }}
                rel="noreferrer"
                target="_blank"
                href={'https://github.com/beefyfinance'}
              >
                <OutlinedButton color="#0D0E14">
                  <Github />
                  Github
                </OutlinedButton>
              </a>
            </CardActions>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default SmartMoney;
