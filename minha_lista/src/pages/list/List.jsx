import React from 'react';

import Header from '../../components/header/Header';
import TitleH1 from '../../components/title/Title';
import Card from '../../components/card/Card';
import Footer from '../../components/footer/Footer';

const List = props => (
  <>
    <Header />
    <TitleH1>Lista de compras</TitleH1>
    <main>
      <div className="CardGroup">
        <Card />
        <Card />
        <Card />
      </div>
    </main>
    <Footer />
  </>
);

export default List;
