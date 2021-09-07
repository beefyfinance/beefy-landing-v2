import React from 'react';
import Hero from './sections/Hero/index';
import SmartMoney from './sections/SmartMoney';
import Vaults from './sections/Vaults';
import Socials from './sections/Socials';

const Landing = () => {
  return (
    <>
      <Hero />
      <SmartMoney />
      <Vaults />
      <Socials />
    </>
  );
};

export default Landing;
