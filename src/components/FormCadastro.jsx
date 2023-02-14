import React from 'react'

import {useState, useEffect} from 'react';

/*import {useHistory} from 'react-router-dom';*/

import blogFetch from "../axios/config";

import Input from './Formulario/Input';

import BotaoSubmit from './Formulario/BotaoSubmit';


const FormCadastro = () => {

    /*const history = useHistory();*/

    function criandoProduto(produto){
   
     fetch("https://fake-server-projetoindividual.onrender.com/produtos",
     {
       method: 'POST',
       headers : {
         'Content-type' : 'application/json',
       },
       body: JSON.stringify(produto),
   
     })
       .then((response) => response.json())
       .then((data) => {
       console.log(data)
     })
     .catch((err) => console.log(err))
   
    }

  return (
    <>
    <Input type="text" text="Tipo de produto: " name="tipo" placeholder="Insira o tipo de produto"/>
    <Input type="text" text="URL da imagem: " name="url_Imagem" placeholder="Insira a URL da imagem"/>
    <Input type="text" text="Descrião do produto: " name="descricao" placeholder="Insira da descricao do produto"/>
    <Input type="price" text="Valor do produto" name="preco" placeholder="Insira o valor do produto"/>
    <BotaoSubmit text="Cadastrar Produto" handleSubmit={criandoProduto} />
    </>
  )
}

export default FormCadastro