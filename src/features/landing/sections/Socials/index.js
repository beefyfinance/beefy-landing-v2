import React from 'react';
import { makeStyles, Box, Grid, Typography, Container, List, ListItem } from '@material-ui/core';
import styles from './styles';
import Bg from 'features/landing/components/Bg';
import Discord from 'features/landing/components/Discord';

const useStyles = makeStyles(styles);

const Socials = () => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.root}>
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
                    <img src={require('images/docs.svg').default} alt="docs" /> Docs
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
                    <img src={require('images/socialIcons/telegram.svg').default} alt="star" />{' '}
                    Telegram
                  </ListItem>
                  <ListItem>
                    <img src={require('images/socialIcons/twitter.svg').default} alt="docs" />{' '}
                    Twitter
                  </ListItem>
                </List>
              </Box>
            </Grid>
          </Grid>
        </Container>
        <Bg />
      </Box>
    </>
  );
};

export default Socials;
