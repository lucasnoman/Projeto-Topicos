import React, { useEffect, useState } from 'react';

import Header from '../../components/header/Header';
import TitleH1 from '../../components/title/Title';
import Card from '../../components/card/Card';
import Footer from '../../components/footer/Footer';

const List = props => {
  let localProducts = JSON.parse(localStorage.getItem('products'));
  const [products, setProducts] = useState(localProducts);

  const deleteProduct = localProduct => {
    setProducts(products.filter(product => product.name !== localProduct));
  };

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  });

  return (
    <>
      <Header />
      <TitleH1>Lista de compras</TitleH1>
      <main>
        {localProducts.length > 0 && (
          <div className="CardGroup">
            {localProducts.map((content, index) => (
              <Card
                key={index}
                name={content.name}
                price={content.price}
                onDelete={deleteProduct}
              />
            ))}
          </div>
        )}
      </main>
      <Footer index={false} />
    </>
  );
};

export default List;
