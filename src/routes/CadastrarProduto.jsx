import React from 'react'

import axios from 'axios'; 

import FormCadastro from '../components/FormCadastro';

import blogFetch from "../axios/config";

import {useState, useEffect} from 'react';

import { useNavigate } from 'react-router-dom';

import "./CadastrarProduto.css"

const CadastrarProduto = () => {

 
  return (
    <div className='container_Principal_CadastrarProdutos'>
     <FormCadastro />
    </div>
  )
}

export default CadastrarProduto