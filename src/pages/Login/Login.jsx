import React, { useState } from 'react';
import { TextField, Button, Container, Grid } from '@material-ui/core';
import { useHistory, Link } from 'react-router-dom';
import './Login.css';

function Login() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  function handleSubmit(event) {
    event.preventDefault();
    history.push('/marcas');
  }

  return (
    <Container maxWidth="sm">
      <form onSubmit={handleSubmit}>
        <TextField
          value={login}
          onChange={(evt) => setLogin(evt.target.value)}
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email"
          name="email"
          autoComplete="email"
          autoFocus
        />
        <TextField
          value={password}
          onChange={(evt) => setPassword(evt.target.value)}
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />

        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Button type="submit" fullWidth variant="contained" color="primary">
              logar
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              component={Link}
              to={{ pathname: '/cadastrar' }}
              type="button"
              fullWidth
              variant="contained"
              color="primary"
            >
              registrar
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}

export default Login;
