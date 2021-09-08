import React from 'react';
import {
  makeStyles,
  Box,
  Grid,
  Typography,
  Container,
  List,
  ListItem,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';
import HowToVoteIcon from '@material-ui/icons/HowToVote';
import ForumIcon from '@material-ui/icons/Forum';
import styles from './styles';
import Discord from 'features/landing/components/Discord';
import FooterImage from 'images/footer-bg.svg';
import Github from 'features/landing/components/Github';

const useStyles = makeStyles(styles);

const Socials = () => {
  const props = {
    bgImage: FooterImage,
  };
  const classes = useStyles(props);

  const theme = useTheme();
  const containerWidth = useMediaQuery(theme.breakpoints.down('sm')) ? 'sm' : 'md';

  return (
    <>
      <Box mt={10} className={classes.root}>
        <Container maxWidth={containerWidth}>
          <Grid container justifyContent="center" spacing={10} alignItems="center">
            <Grid item className={classes.center} xs={6}>
              <Box>
                <Typography className={classes.bold}>Lean More</Typography>
                <List className={classes.items}>
                  <ListItem>
                    <a
                      style={{ textDecoration: 'none', color: '#000' }}
                      rel="noreferrer"
                      target="_blank"
                      href="https://github.com/beefyfinance"
                    >
                      <Github /> Github
                    </a>
                  </ListItem>
                  <ListItem>
                    <a
                      style={{ textDecoration: 'none', color: '#000' }}
                      rel="noreferrer"
                      target="_blank"
                      href="https://docs.beefy.finance/beefyfinance/"
                    >
                      <img src={require('images/docs.svg').default} alt="docs" /> Docs
                    </a>
                  </ListItem>
                  <ListItem>
                    <a
                      style={{ textDecoration: 'none', color: '#000' }}
                      rel="noreferrer"
                      target="_blank"
                      href="https://vote.beefy.finance/"
                    >
                      <HowToVoteIcon /> Vote
                    </a>
                  </ListItem>
                  <ListItem>
                    <a
                      style={{ textDecoration: 'none', color: '#000' }}
                      rel="noreferrer"
                      target="_blank"
                      href="https://forum.beefy.finance/"
                    >
                      <ForumIcon /> Forum
                    </a>
                  </ListItem>
                </List>
              </Box>
            </Grid>
            <Grid item className={classes.center} xs={6}>
              <Box>
                <Typography className={classes.bold}>Community</Typography>
                <List className={classes.items}>
                  <ListItem>
                    <a
                      style={{ textDecoration: 'none', color: '#000' }}
                      rel="noreferrer"
                      target="_blank"
                      href="http://discord.gg/beefyfinance"
                    >
                      <Discord className={classes.discord} color="#0D0E14" />
                      Discord
                    </a>
                  </ListItem>
                  <ListItem>
                    <a
                      style={{ textDecoration: 'none', color: '#000' }}
                      rel="noreferrer"
                      target="_blank"
                      href="https://t.me/beefyfinance"
                    >
                      <img src={require('images/socialIcons/telegram.svg').default} alt="star" />{' '}
                      Telegram
                    </a>
                  </ListItem>
                  <ListItem>
                    <a
                      style={{ textDecoration: 'none', color: '#000' }}
                      rel="noreferrer"
                      target="_blank"
                      href="https://twitter.com/beefyfinance"
                    >
                      <img src={require('images/socialIcons/twitter.svg').default} alt="docs" />{' '}
                      Twitter
                    </a>
                  </ListItem>

                  <ListItem>
                    <a
                      style={{ textDecoration: 'none', color: '#000' }}
                      rel="noreferrer"
                      target="_blank"
                      href=" https://www.reddit.com/r/Beefy/"
                    >
                      <img src={require('images/socialIcons/reddit.svg').default} alt="docs" />{' '}
                      Reddit
                    </a>
                  </ListItem>
                </List>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Socials;
