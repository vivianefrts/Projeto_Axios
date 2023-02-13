//import React from 'react'
import { Link } from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
        <h2>
            <Link to = {'/'}>Vivi Coiffeur</Link>
        </h2>
        <ul>
            <li>
                <Link to = {'/'}>Home</Link>
            </li>
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