import React from 'react';
import { makeStyles, Box, Grid, Typography, Container, List, ListItem } from '@material-ui/core';
import styles from './styles';
import Discord from 'features/landing/components/Discord';
import FooterImage from 'images/footer-bg.svg';

const useStyles = makeStyles(styles);

const Socials = () => {
  const props = {
    bgImage: FooterImage,
  };
  const classes = useStyles(props);
  return (
    <>
      <Box mt={10} className={classes.root}>
        <Container maxWidth="md">
          <Grid container justifyContent="center" spacing={10} alignItems="center">
            <Grid item className={classes.center} xs={6}>
              <Box>
                <Typography className={classes.bold}>How it Works</Typography>
                <List className={classes.items}>
                  <ListItem>
                    <img src={require('images/star.svg').default} alt="star" /> Getting started
                  </ListItem>
                  <ListItem>
                    <img src={require('images/faq.svg').default} alt="star" /> FAQ
                  </ListItem>
                  <ListItem>
                    <a
                      style={{ textDecoration: 'none', color: '#000' }}
                      rel="noreferrer"
                      target="_blank"
                      href=" https://docs.beefy.finance/beefyfinance/"
                    >
                      <img src={require('images/docs.svg').default} alt="docs" /> Docs
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
                    <Discord className={classes.discord} color="#0D0E14" />
                    Discord
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
