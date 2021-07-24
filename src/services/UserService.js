import { API_URL } from '../Constants';

const UserService = {
  create(user) {
    return fetch(API_URL + '/users', {
      method: 'POST',
      contentType: 'application/json',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    }).then((r) => r.json());
  },

  update(user) {
    return fetch(API_URL + '/users/' + user.id, {
      method: 'PUT',
      contentType: 'application/json',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    }).then((r) => r.json());
  },

  getById(id) {
    return fetch(API_URL + '/users/' + id).then((r) => r.json());
  },

  getAll() {
    return fetch(API_URL + '/users').then((r) => r.json());
  },

  delete(user) {
    return fetch(API_URL + '/users/' + user.id, {
      method: 'DELETE',
      contentType: 'application/json',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${window.sessionStorage.getItem('@App:token')}`,
      },
    }).then((r) => r.json());
  },
};

export default UserService;
