import type { NextPage } from 'next';
import { CssBaseline } from '@mui/material';
import HomeComponents from '../components/Templates/Home';

const Home: NextPage = () => {
  return (
    <>
      <CssBaseline />
      <HomeComponents />
    </>
  );
};

export default Home;
