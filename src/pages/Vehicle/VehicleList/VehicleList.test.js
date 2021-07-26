import React from 'react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import VehicleList from './VehicleList';

const vehiclesMock = {
  content: [
    {
      id: 0,
      model: 'Fusca',
      price: 800,
      year: 2030,
      marca: { id: 0, nome: 'Fiat' },
    },
  ],
};
jest.mock('../../../services/VehicleService', () => ({
  delete: jest.fn().mockResolvedValue(),
  getAll: jest.fn().mockResolvedValue(vehiclesMock),
}));

describe('<VehicleList />', () => {
  const history = createMemoryHistory();

  beforeEach(async () => {
    jest.clearAllMocks();
    await act(async () =>
      render(
        <Router history={history}>
          <VehicleList />
        </Router>
      )
    );
  });

  it('Should redirect to vehicle update route when user click on update button', async () => {
    const updateBtn = screen.getByRole('button', { name: 'Alterar' });
    const vehicleSelected = await screen.findByText(
      vehiclesMock.content[0].model
    );
    userEvent.click(vehicleSelected);
    userEvent.click(updateBtn);

    expect(history.location.pathname).toBe(
      '/veiculo/alteracao-veiculo/' + vehiclesMock.content[0].id
    );
  });
  it('Should delete item', async () => {
    const deleteBtn = screen.getByRole('button', { name: /Excluir/i });
    const vehicleSelected = await screen.findByText(
      vehiclesMock.content[0].model
    );
    userEvent.click(vehicleSelected);
    userEvent.click(deleteBtn);
    expect(vehicleSelected).not.toBeInTheDocument();
  });
  it('Should redirect to "cadastro-veiculo" when press "incluir" button', () => {
    const createBtn = screen.getByRole('button', { name: /Incluir/i });
    userEvent.click(createBtn);
    expect(history.location.pathname).toBe('/veiculo/cadastro-veiculo');
  });
  it('Should render list lines', async () => {
    expect(
      await screen.findByText(vehiclesMock.content[0].model)
    ).toBeInTheDocument();
  });
});
