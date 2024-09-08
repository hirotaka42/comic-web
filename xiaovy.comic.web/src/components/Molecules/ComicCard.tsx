import { Card, CardMedia, Typography } from '@mui/material';

interface ComicCardProps {
  image: string;
  title: string;
}

export const ComicCard: React.FC<ComicCardProps> = ({ image, title }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        image={image}
        alt={title}
        sx={{ width: '100%', height: 'auto' }}
      />
      <Typography variant="body2" noWrap>
        {title}
      </Typography>
    </Card>
  );
};
