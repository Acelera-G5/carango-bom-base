import { API_URL } from '../Constants';

const BrandService = {
  create(brand) {
    return fetch(API_URL + '/marcas', {
      contentType: 'application/json',
      headers: {
        Authorization: `Bearer ${window.sessionStorage.getItem('@App:token')}`,
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(brand),
    }).then((r) => r.json());
  },

  update(brand) {
    return fetch(API_URL + '/marcas/' + brand.id, {
      contentType: 'application/json',
      headers: {
        Authorization: `Bearer ${window.sessionStorage.getItem('@App:token')}`,
        'Content-Type': 'application/json',
      },
      method: 'PUT',
      body: JSON.stringify(brand),
    }).then((r) => r.json());
  },

  getById(id) {
    return fetch(API_URL + '/marcas/' + id, {
      contentType: 'application/json',
      headers: {
        Authorization: `Bearer ${window.sessionStorage.getItem('@App:token')}`,
        'Content-Type': 'application/json',
      },
    }).then((r) => r.json());
  },

  getAll() {
    return fetch(API_URL + '/marcas').then((r) => r.json());
  },

  delete(brand) {
    return fetch(API_URL + '/marcas/' + brand.id, {
      contentType: 'application/json',
      headers: {
        Authorization: `Bearer ${window.sessionStorage.getItem('@App:token')}`,
        'Content-Type': 'application/json',
      },
      method: 'DELETE',
    });
  },
};

export default BrandService;
