import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import { ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

import { theme } from './styles/theme';
import RootProvider from './context';

import Sort from './container/Sort';
import Scenarios from './container/Scenarios';
import Search from './container/Search';

function App() {
  return (
    <RootProvider>
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <CssBaseline />
          <Container maxWidth="md">
            <Grid container 
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid item>
                <Sort />
              </Grid>
              <Grid item justifyContent="flex-end">
                <Search />
              </Grid>
            </Grid>


            <Box>
              <Scenarios />
            </Box>
          </Container>
        </React.Fragment>
      </ThemeProvider>
    </RootProvider>
  );
}

export default App;
