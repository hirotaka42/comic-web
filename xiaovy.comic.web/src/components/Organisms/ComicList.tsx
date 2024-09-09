import { Grid } from '@mui/material';
import { ComicCard } from '@components/Molecules/ComicCard';

const comics = [
  {
    image: 'https://m.media-amazon.com/images/I/41++IdvqMZL.null_SY250_.jpg',
    title: 'Comic 1',
    tag: ['tag1', 'tag2'],
  },
  {
    image: 'https://m.media-amazon.com/images/I/415MQJT1JxL.null_SY250_.jpg',
    title: 'Comic 2',
    tag: ['tag1', 'tag2'],
  },
  {
    image: 'https://m.media-amazon.com/images/I/51KGR2ndIsL.null_SY250_.jpg',
    title: 'Comic 3',
    tag: ['tag1', 'tag2'],
  },
  {
    image: 'https://m.media-amazon.com/images/I/41++IdvqMZL.null_SY250_.jpg',
    title: 'Comic 1',
    tag: ['tag1', 'tag2'],
  },
  {
    image: 'https://m.media-amazon.com/images/I/415MQJT1JxL.null_SY250_.jpg',
    title: 'Comic 2',
    tag: ['tag1', 'tag2'],
  },
  {
    image: 'https://m.media-amazon.com/images/I/51KGR2ndIsL.null_SY250_.jpg',
    title: 'Comic 3',
    tag: ['tag1', 'tag2'],
  },
  {
    image: 'https://m.media-amazon.com/images/I/41++IdvqMZL.null_SY250_.jpg',
    title: 'Comic 1',
    tag: ['tag1', 'tag2'],
  },
  {
    image: 'https://m.media-amazon.com/images/I/415MQJT1JxL.null_SY250_.jpg',
    title: 'Comic 2',
    tag: ['tag1', 'tag2'],
  },
  {
    image: 'https://m.media-amazon.com/images/I/51KGR2ndIsL.null_SY250_.jpg',
    title: 'Comic 3',
    tag: ['tag1', 'tag2'],
  },
  {
    image: 'https://m.media-amazon.com/images/I/41++IdvqMZL.null_SY250_.jpg',
    title: 'Comic 1',
    tag: ['tag1', 'tag2'],
  },
  {
    image: 'https://m.media-amazon.com/images/I/415MQJT1JxL.null_SY250_.jpg',
    title: 'Comic 2',
    tag: ['tag1', 'tag2'],
  },
  {
    image: 'https://m.media-amazon.com/images/I/51KGR2ndIsL.null_SY250_.jpg',
    title: 'Comic 3',
    tag: ['tag1', 'tag2'],
  },
  // 追加のデータ
];

export const ComicList: React.FC = () => {
  return (
    <Grid container spacing={2}>
      {comics.map((comic, index) => (
        <Grid item xs={4} key={index}>
          <ComicCard image={comic.image} title={comic.title} />
        </Grid>
      ))}
    </Grid>
  );
};
