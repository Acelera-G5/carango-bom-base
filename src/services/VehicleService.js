import { API_URL } from '../Constants';

const VehicleService = {
  create(vehicle) {
    return fetch(API_URL + '/vehicle', {
      method: 'POST',
      contentType: 'application/json',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${window.sessionStorage.getItem('@App:token')}`,
      },
      body: JSON.stringify(vehicle),
    }).then((r) => r.json());
  },

  update(vehicle) {
    return fetch(API_URL + '/vehicle/' + vehicle.id, {
      method: 'PUT',
      contentType: 'application/json',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${window.sessionStorage.getItem('@App:token')}`,
      },
      body: JSON.stringify(vehicle),
    }).then((r) => r.json());
  },

  getById(id) {
    return fetch(API_URL + '/vehicle/' + id).then((r) => r.json());
  },
  getAll() {
    return fetch(API_URL + '/vehicle').then((r) => r.json());
  },
  delete(vehicle) {
    return fetch(API_URL + '/vehicle/' + vehicle.id, {
      method: 'DELETE',
      contentType: 'application/json',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${window.sessionStorage.getItem('@App:token')}`,
      },
    }).then((r) => r.json());
  },
};

export default VehicleService;
