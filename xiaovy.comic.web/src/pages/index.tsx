import type { NextPage } from 'next';
import { CssBaseline } from '@mui/material';
import HomeComponents from '../components/Templates/Home';
import { ComicHome } from '../components/Templates/ComicHome';

const Home: NextPage = () => {
  return (
    <>
      <CssBaseline />
      <ComicHome />
    </>
  );
};

export default Home;
