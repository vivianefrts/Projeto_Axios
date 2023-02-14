import React from 'react'
import './Servicos.css'
import blogFetch from "../axios/config";

import Tilt from 'react-vanilla-tilt'
import {useState, useEffect} from 'react';

const Servicos = () => {
  const [services, setServices] = useState([])
  const getServices = async() => {
    try {
      const response = await blogFetch.get('/Servicos');
      const data = response.data;

      setServices(data);
    } catch (error) {
      console.log(error)
    }
  } 

  useEffect(() => {
    getServices()
  }, [])


  return (
    <div className='servicos-container-principal'>
    <h1>Serviços</h1>
    <div className='container-cartoes-servicos'>
    {services.length === 0 ? (<p>Carregando...</p>) : (
      services.map((services) => (
        <Tilt>
        <div className="cartoes-servicos" key={services.id}>
          <h2>{services.tipo}</h2>
          <h4>Descrição: {services.descricao}</h4>
          <p>Preço: R${services.preco},00</p>
        </div>
        </Tilt>
      ))
    )}
    </div>
  </div>
  )
}

export default Servicos