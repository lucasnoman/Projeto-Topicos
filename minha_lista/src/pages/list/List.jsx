import React, { useEffect, useState } from 'react';

import Header from '../../components/header/Header';
import TitleH1 from '../../components/title/Title';
import Card from '../../components/card/Card';
import Footer from '../../components/footer/Footer';

const List = props => {
  // Na página de lista, chamo o hook state para receber o LocalStorage
  let localProducts = JSON.parse(localStorage.getItem('products'));
  const [products, setProducts] = useState(localProducts);

  // Essa função vai executar o array.filter como visto em aula,
  // para retornar um novo array com todos os dados contidos no vetor, menos
  // o filtrado, deletando o conteúdo da posição solicitada
  const deleteProduct = localProduct => {
    setProducts(products.filter(product => product.name !== localProduct));
  };

  // Faz a atualização do conteúdo do LocalStorage
  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  });

  // Função que formata o número e retorna-o em formato da moeda brasileira
  let formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  return (
    <>
      <Header />
      <TitleH1>Lista de compras</TitleH1>
      <main>
        {/* Caso haja conteúdo no LocalStorage, será renderizado os cards  */}
        {localProducts.length > 0 && (
          <div className="CardGroup">
            {localProducts.map((content, index) => (
              <Card
                key={index}
                name={content.name}
                price={content.price}
                onDelete={deleteProduct}
                format={formatter.format}
              />
            ))}
          </div>
        )}
      </main>
      {/* Como esse footer é diferente, precisa receber o formatador
      de valores */}
      <Footer index={false} format={formatter.format} />
    </>
  );
};

export default List;
