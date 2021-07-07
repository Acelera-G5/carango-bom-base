import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import BrandService from '../../services/BrandService';

import Table from '../../components/Table/Table';

const columns = [{ field: 'nome', headerName: 'Marca', width: 200 }];

function BrandList() {
  const [brands, setBrands] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState();
  const history = useHistory();

  function create() {
    history.push('/cadastro-marca');
  }

  function update() {
    history.push('/alteracao-marca/' + selectedBrand.id);
  }

  function deleteBrand() {
    BrandService.delete(selectedBrand);
    setBrands(brands.filter((brand) => brand.id !== selectedBrand.id));
    setSelectedBrand(null);
  }

  useEffect(() => fetchBrands(), []);

  function fetchBrands() {
    BrandService.getAll().then((data) => setBrands(data));
  }

  return (
    <div style={{ height: 300, width: '100%' }}>
      <Table
        rows={brands}
        columns={columns}
        addItem={create}
        updateItem={update}
        deleteItem={deleteBrand}
        selectedItem={selectedBrand}
        rowSelectedFunction={setSelectedBrand}
      />
    </div>
  );
}

export default BrandList;
