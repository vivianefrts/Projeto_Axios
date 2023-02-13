import React from 'react'

import axios from 'axios'; 

import "./CadastrarProduto.css";

import blogFetch from "../axios/config";

import {useState, useEffect} from 'react';

import { useNavigate } from 'react-router-dom';

const CadastrarProduto = () => {
  const navigate = useNavigate()

  const [tipo, setTipo] = useState()
  const [urlimg, setUrlimg] = useState()
  const [descricao, setDescricao] = useState()
  const [valor, setValor] = useState()

  const criandoPost = (e) => {
    e.preventDefault();
    console.log("teste")
  }

  return (
    <div className='novo-produto'>
      <h2>Inserir Produto</h2>
      <form onSubmit={(e) => criandoPost(e)} action="">
        <div className="container-input-tipo">
          <label htmlFor="tipo">Tipo de produto: </label>
          <input type="text" name='tipo' id="tipo" placeholder='Digite o tipo de produto' />
        </div>
        <div className="container-input-imagem">
          <label htmlFor="url-imagem">Url da imagem: </label>
          <input type="text" name='url-imagem' id='url-imagem' placeholder='Insita a URL da imagem' />
        </div>
        <div className="container-input-descricao">
          <label htmlFor="descricao">Descrição do produto:</label>
          <textarea name='descricao' id='descricao' placeholder='Insita a descrição do produto'/>
        </div>
        <div className="container-input-valor">
          <label htmlFor="valor">Preço: </label>
          <input type="price" name='valor' id='valor' placeholder='Insira o valor do produto' />
        </div>
        <input type="submit" value="Cadastrar produto" className='botao-cadastrar' />
      </form>
    </div>
  )
}

export default CadastrarProduto