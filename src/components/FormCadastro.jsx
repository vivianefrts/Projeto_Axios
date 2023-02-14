import React from 'react'
import {useState, useEffect} from 'react';
import blogFetch from "../axios/config";
import Input from './Formulario/Input';
import BotaoSubmit from './Formulario/BotaoSubmit';


const FormCadastro = ({handleSubmit, produtosData}) => {
    const [produtos, setProdutos] = useState(produtosData || {})


    function criandoProduto(produto){
    
    console.log("Cadastrou")
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

    const submit = (e) => {
      e.preventDefault()
      handleSubmit(produtos)
    }

    function handleChange(e){
      setProdutos({...produtos, [e.target.name]: [e.target.value]})
      console.log(produtos)
    }
  return (
    <>
    <Input type="text" text="Tipo de produto: " name="tipo" placeholder="Insira o tipo de produto" handleOnChange={handleChange}/>
    <Input type="text" text="URL da imagem: " name="url_Imagem" placeholder="Insira a URL da imagem" handleOnChange={handleChange}/>
    <Input type="text" text="Descrião do produto: " name="descricao" placeholder="Insira da descricao do produto" handleOnChange={handleChange}/>
    <Input type="price" text="Valor do produto" name="preco" placeholder="Insira o valor do produto" handleOnChange={handleChange}/>
    <BotaoSubmit text="Cadastrar Produto" handleSubmit={criandoProduto} />
   </>
       
  )
}

export default FormCadastro