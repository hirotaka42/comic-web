import type { NextPage } from 'next';
import styles from '../../styles/Home.module.css';
import {
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  FormGroup,
  Paper,
} from '@mui/material';

const HomeComponents: NextPage = () => {
  return (
    <>
      <Container>
        <Paper elevation={3} sx={{ p: 5 }}>
          <h1 className={styles.title}>Welcome to Material UI!</h1>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Label"
            />
            <FormControlLabel
              required
              control={<Checkbox />}
              label="Required"
            />
            <FormControlLabel
              disabled
              control={<Checkbox />}
              label="Disabled"
            />
          </FormGroup>
          <hr />
          <Button variant="contained" color="primary">
            ボタン
          </Button>
        </Paper>
      </Container>
    </>
  );
};

export default HomeComponents;
