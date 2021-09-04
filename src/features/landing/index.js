import React from 'react';
import Hero from './sections/Hero/index';
import SmartMoney from './sections/SmartMoney';
import Vaults from './sections/Vaults';
import Socials from './sections/Socials';
import Bg from 'features/landing/components/Bg';

const Landing = () => {
  return (
    <>
      <Hero />
      <SmartMoney />
      <Vaults />
      <Socials />
      <Bg />
    </>
  );
};

export default Landing;
