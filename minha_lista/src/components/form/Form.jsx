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
  const [{ alt, src }, setImg] = useState({ src: '', alt: '' });
  const [products, setProducts] = useState({ name: '', price: '' });

  const handleChange = e => {
    setProducts({ ...products, [e.target.name]: e.target.value });
  };

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
          // print();
          props.onAddProduct(products);
        }}
      >
        <div>
          <InputText
            placeholder={'Nome do produto'}
            value={products.name}
            name="name"
            onChange={handleChange}
          />
          <InputText
            placeholder={'Preço do produto'}
            value={products.price}
            name="price"
            onChange={handleChange}
          />
          <ImageField>
            <img
              src={src}
              alt={alt}
              style={{ maxHeight: 140, marginRight: 50, borderRadius: 10 }}
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
          <Button type="submit" disabled={products.length === 0} primary>
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
