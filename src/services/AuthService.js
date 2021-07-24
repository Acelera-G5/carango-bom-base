import { API_URL } from '../Constants';

const AuthService = {
  login(credentials) {
    return fetch(API_URL + '/auth', {
      method: 'POST',
      contentType: 'application/json',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials),
    }).then((response) => response.json());
  },
};

export default AuthService;
