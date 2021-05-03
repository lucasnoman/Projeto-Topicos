import React, { useEffect, useState } from 'react';

import TitleH1 from '../../components/title/Title';
import Header from '../../components/header/Header';
import Footer2 from '../../components/footer/Footer2';
import Form from '../../components/form/Form';

const Index = props => {
  // Na página índice, o LocalStorage é criado ou recuperado
  let localProducts = JSON.parse(localStorage.getItem('products'));
  if (!localProducts) localProducts = [];
  // Aqui o hook state é criado no formato do LocalStorage, que é um objeto
  const [products, setProducts] = useState(localProducts);

  // Função que usa o state para adicionar os novos produtos com o
  // princípio de imutabilidade, se não me engano
  const addProduct = newProducts => setProducts([...products, newProducts]);

  // Atualiza o LocalStorage
  useEffect(() => localStorage.setItem('products', JSON.stringify(products)));

  return (
    <>
      <Header index />
      <TitleH1>Preencha sua lista</TitleH1>
      <main>
        {/* Os props enviados para esse componente são para exibição e
        adição de produtos */}
        <Form products={products} onAddProduct={addProduct} />
      </main>
      <Footer2 />
    </>
  );
};

export default Index;
