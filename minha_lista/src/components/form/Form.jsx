import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BiLogIn } from 'react-icons/bi';

import {
  MainForm,
  InputText,
  ImageField,
  InputImage,
  LabelImageButton,
  ButtonsGroup,
  Button,
} from './styles.js';

export default function Form(props) {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [{ alt, src }, setImg] = useState({
    src: '',
    alt: '',
  });

  const handleImg = e => {
    if (e.target.files[0]) {
      setImg({
        src: URL.createObjectURL(e.target.files[0]),
        alt: e.target.files[0].name,
      });
    }
  };

  return (
    <>
      <MainForm
        onSubmit={e => {
          e.preventDefault();
          props.onAddName(productName);
          setProductName('');
          props.onAddPrice(productPrice);
          setProductPrice('');
        }}
      >
        <div>
          <InputText
            placeholder={'Nome do produto'}
            value={productName}
            onChange={e => setProductName(e.target.value)}
          />
          <InputText
            placeholder={'Preço do produto'}
            value={productPrice}
            onChange={e => setProductPrice(e.target.value)}
          />
          <ImageField>
            <img
              src={src}
              alt={alt}
              style={{ height: 140, marginRight: 50, borderRadius: 10 }}
            />
            <LabelImageButton for="picture">Inserir imagem</LabelImageButton>
            <InputImage
              id="picture"
              type="file"
              accept="image/*"
              name="picture"
              onChange={handleImg}
            />
          </ImageField>
        </div>

        <ButtonsGroup>
          <Button type="submit" disabled={productName.length === 0} primary>
            Cadastrar
          </Button>
          <Link to="/list" style={{ textDecoration: 'none' }}>
            <Button>
              Produtos cadastrados <BiLogIn />
            </Button>
          </Link>
        </ButtonsGroup>
      </MainForm>
    </>
  );
}
