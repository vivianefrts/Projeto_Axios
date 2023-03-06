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
                <Link to  = {'/transformacao'} className = "link-navbar">TRANSformação</Link>
            </li>
            <li>
                <Link to  = {'/servicos'} className = "link-navbar">Serviços</Link>
            </li>
            <li>
                <Link to = {'/produtos'} className = "link-navbar">Produtos</Link>
            </li>
            <li>
                <Link to = {'/cadastrarProdutos'} className = "link-navbar">Cadastrar Produtos</Link>
            </li>
            <li>
                <Link to = {'/equipe'} className = "link-navbar">Equipe</Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar