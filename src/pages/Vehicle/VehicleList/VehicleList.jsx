import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import VehicleService from '../../../services/VehicleService';
import { useAuth } from '../../../contexts/auth';

import Table from '../../../components/Table/Table';
import './VehicleList.css';

const columns = [
  { field: 'model', headerName: 'Modelo', width: 200 },
  { field: 'year', headerName: 'Ano', width: 200 },
  { field: 'nome-marca', headerName: 'Marca', width: 200 },
  { field: 'price', headerName: 'Valor', width: 200 },
];

function VehicleList() {
  const [vehicles, setVehicles] = useState([]);
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const history = useHistory();
  const { signed } = useAuth();

  function create() {
    history.push('/cadastro-veiculo');
  }

  function update() {
    history.push('/alteracao-veiculo/' + selectedVehicle.id);
  }

  function deleteVehicle() {
    VehicleService.delete(selectedVehicle);
    setVehicles(
      vehicles.filter((vehicle) => vehicle.id !== selectedVehicle.id)
    );
    setSelectedVehicle(null);
  }

  useEffect(() => fetchVehicles(), []);

  function fetchVehicles() {
    VehicleService.getAll().then((data) => {
      data = data.content.map((elem) => {
        return { 'nome-marca': elem.marca.nome, ...elem };
      });
      setVehicles(data);
    });
  }

  return (
    <div
      style={{ height: 300, width: '100%' }}
      className={`actions-${signed ? 'active' : 'disable'}`}
    >
      <Table
        rows={vehicles}
        columns={columns}
        addItem={create}
        updateItem={update}
        deleteItem={deleteVehicle}
        selectedItem={selectedVehicle}
        rowSelectedFunction={setSelectedVehicle}
      />
    </div>
  );
}

export default VehicleList;
