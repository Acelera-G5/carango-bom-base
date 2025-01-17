import { Container, CssBaseline, makeStyles } from '@material-ui/core';
import blue from '@material-ui/core/colors/blue';
import { ptBR } from '@material-ui/core/locale';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import './App.css';

import { AuthProvider, useAuth } from './contexts/auth';
import CustomDrawer from './components/CustomDrawer/CustomDrawer';
import Routes from './routes/Routes';

const muiTheme = createMuiTheme(
  {
    palette: {
      primary: {
        main: blue[900],
      },
    },
  },
  ptBR
);

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

function RenderWithAuth() {
  const classes = useStyles();
  const { signed } = useAuth();

  return (
    <>
      <CustomDrawer signed={signed} />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Container component="article" maxWidth="md">
          <Routes />
        </Container>
      </main>
    </>
  );
}

function App() {
  const classes = useStyles();
  return (
    <AuthProvider>
      <ThemeProvider theme={muiTheme}>
        <div className={classes.root}>
          <CssBaseline />
          <RenderWithAuth />
        </div>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
