import React from 'react';

import TitleH1 from '../../components/title/Title';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Form from '../../components/form/Form';

const Index = props => {
  return (
    <>
      <Header index />
      <TitleH1>Preencha sua lista</TitleH1>
      <main>
        <Form />
      </main>
      <Footer />
    </>
  );
};

export default Index;
