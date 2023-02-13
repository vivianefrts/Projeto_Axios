import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import {createBrowserRouter, RouterProvider, Route} from 'react-router-dom'

//seção das páginas
import Home from './routes/Home'
import Equipe from './routes/Equipe'
import TRANSformacao from './routes/TRANSformacao'
import Servicos from './routes/Servicos'
import CadastrarProduto from './routes/CadastrarProduto'
import Produtos from './routes/Produtos'

import './index.css'

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/equipe",
        element: <Equipe />
      },
      {
        path: "/transformacao",
        element: <TRANSformacao />
      },
      {
        path: "/servicos",
        element: <Servicos />
      },
      {
        path:"/produtos",
        element: <Produtos />
      },
      {
        path: "/cadastrarProdutos",
        element: <CadastrarProduto />
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>,
)
