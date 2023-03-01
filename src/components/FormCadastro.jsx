import {useState, useEffect} from 'react';
import Input from './Formulario/Input';
import BotaoSubmit from './Formulario/BotaoSubmit';

import axios from 'axios'


const FormCadastro = () => {

  const [dados, setdados] = useState(
    {
      tipo: '',
      imagem: '',
      descricao: '',
      preco: ''
    }
  );

   console.log(`${dados.tipo}`);
   function handleChange(event){
    const{name, value} = event.target;

    setdados({ ...dados, [name]: value});
  }
  function enviandoCadastro(e){
    e.preventDefault();
    axios.post('https://fake-server-projetoindividual.onrender.com/produtos', {
    tipo: dados.tipo,
    descricao: dados.descricao,
    imagem: dados.imagem,
    preco: dados.preco
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  }

  return (
    <>
    <Input type="text" text="Tipo de produto: " name="tipo" placeholder="Insira o tipo de produto" onChange = {handleChange} />
    <Input type="text" text="URL da imagem: " name="url_Imagem" placeholder="Insira a URL da imagem" onChange = {handleChange}/>
    <Input type="text" text="Descrião do produto: " name="descricao" placeholder="Insira da descricao do produto" onChange = {handleChange}/>
    <Input type="price" text="Valor do produto" name="preco" placeholder="Insira o valor do produto" onChange = {handleChange}/>
    <BotaoSubmit text="Cadastrar Produto" onSubmit = {enviandoCadastro}

    />
   </>
       
  )
}

export default FormCadastro