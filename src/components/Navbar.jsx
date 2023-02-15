//import React from 'react'
import { Link } from 'react-router-dom';
import "./Navbar.css";

import logo from '../../src/images/Logo1.png'

const Navbar = () => {
  return (
    <div className="navbar">
        
        <ul>
            <li>
                <Link to = {'/'}>
                    <img src = {logo} alt="logo" />
                </Link>
            </li>
        </ul>
        
        <ul>
            <li>
                <Link to = {'/transformacao'}>TRANSformação</Link>
            </li>
            <li>
                <Link to  = {'/servicos'}>Serviços</Link>
            </li>
            <li>
                <Link to = {'/produtos'}>Produtos</Link>
            </li>
            <li>
                <Link to = {'/cadastrarProdutos'}>Cadastrar Produtos</Link>
            </li>
            <li>
                <Link to = {'/equipe'}>Equipe</Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar