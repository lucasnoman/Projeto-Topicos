import React, { useEffect, useState } from 'react';

import TitleH1 from '../../components/title/Title';
import Header from '../../components/header/Header';
import Footer2 from '../../components/footer/Footer2';
import Form from '../../components/form/Form';

const Index = props => {
  let localProducts = JSON.parse(localStorage.getItem('products'));
  if (!localProducts) localProducts = [];
  const [products, setProducts] = useState(localProducts);

  const addProduct = newProducts => setProducts([...products, newProducts]);

  useEffect(() => localStorage.setItem('products', JSON.stringify(products)));

  return (
    <>
      <Header index />
      <TitleH1>Preencha sua lista</TitleH1>
      <main>
        <Form products={products} onAddProduct={addProduct} />
      </main>
      <Footer2 />
    </>
  );
};

export default Index;
