import React from 'react'
import { Link } from 'react-router-dom';
import "./Produtos.css"
import axios from 'axios';

import Tilt from 'react-vanilla-tilt'

import blogFetch from "../axios/config";

import {useState, useEffect} from 'react';

import { BsFillPencilFill } from "react-icons/bs";
import { VscError } from "react-icons/vsc";


const Produtos = () => {
  const [products, setProducts] = useState([])
  const getProducts = async() => {
    try {
      const response = await blogFetch.get('/Produtos');
      const data = response.data;

      setProducts(data);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getProducts();
  }, [])

  const deleteProduto = (id, e) =>{
    axios.delete(`https://fake-server-projetoindividual.onrender.com/produtos/${id}`)
    .then(res => console.log('Postado', res)).catch(err => console.log(err))
  }

  return (
    <div className='products-main-container'>
      <h1>Produtos</h1>
      <div className='products-card-container'>
        {products.length === 0 ? (<p>Carregando...</p>) : (
            products.map((products) => (
              <Tilt options = {{scale: 2, max: 360, perspective: 100, glare: true}}>
                <div className="products-card" key={products.id}>
                    <h2>{products.tipo}</h2>
                    <img src={products.imagem}></img>
                    <h4>Descrição: {products.descricao}</h4>
                    <p>Preço: R${products.preco},00</p>
                    <div className='verbos-container'>
                      <Link to = {`/editProduto/${products.id}`}>
                        <BsFillPencilFill className='lapis'/>
                      </Link>
                      <VscError className='xzinho' onClick={(e) => deleteProduto(products.id, e)}/>
                    </div>
                </div>
                </Tilt>
        ))
      )}
      </div>
    </div>
  )

}
export default Produtos