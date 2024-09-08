import { Box, ButtonGroup, Button } from '@mui/material';
import { ComicList } from '../Organisms/ComicList';
import Image from 'next/image';

export const ComicHome: React.FC = () => {
  return (
    <Box>
      {/* 上部の大きな画像 */}
      <Box sx={{ position: 'relative', height: '400px', width: '100%' }}>
        <Image
          src="https://github-production-user-asset-6210df.s3.amazonaws.com/79750434/365408047-9cbaba22-9af2-4732-bfd0-0c0d8350980e.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20240908%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240908T012121Z&X-Amz-Expires=300&X-Amz-Signature=40a93f001a845dfb9828058268763143e14a64cd32d41313f8acb3f5cf2b01ed&X-Amz-SignedHeaders=host&actor_id=79750434&key_id=0&repo_id=853287068" // パスを直接指定
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
