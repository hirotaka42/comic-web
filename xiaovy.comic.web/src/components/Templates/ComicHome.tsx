import { Box, ButtonGroup, Button } from '@mui/material';
import { ComicList } from '../Organisms/ComicList';
import Image from 'next/image';
import PRimage00 from '@assets/etc/sample00.webp';
import { basePath } from '@../next.config';
const BASE_PATH = basePath ? basePath : '';

export const ComicHome: React.FC = () => {
  return (
    <Box>
      {/* 上部の大きな画像 */}
      <Box sx={{ position: 'relative', height: '400px', width: '100%' }}>
        <Image
          src={`${BASE_PATH}/sample00.webp`}
          alt="MainPR image"
          layout="fill" // 親要素に対して幅と高さを100%にする
          objectFit="cover" // アスペクト比を維持しつつ、コンテナ全体をカバー
        />
        {/* ButtonGroupが画像の上にかぶさる */}
        <ButtonGroup
          variant="contained"
          aria-label="outlined primary button group"
          sx={{
            position: 'absolute',
            top: '95%',
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        >
          <Button>text1</Button>
          <Button>text2</Button>
          <Button>text3</Button>
          <Button>text4</Button>
        </ButtonGroup>
      </Box>

      {/* 下部のComic List */}
      <Box sx={{ marginTop: 4 }}>
        <ComicList />
      </Box>
    </Box>
  );
};
