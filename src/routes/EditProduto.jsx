import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Input from "../components/Formulario/Input";
import BotaoSubmit from "../components/Formulario/BotaoSubmit";

const EditProduto = () => {
    const [dados, setdados] = useState(
        {
            tipo: '',
            imagem: '',
            descricao: '',
            preco: ''
        }
    );

    const {id} = useParams();

    function handleChange(event){
        const{name, value} = event.target;
     
        setdados({ ...dados, [name]: value});
    }

    useEffect(()=>{
        axios.get(`https://fake-server-projetoindividual.onrender.com/produtos/${id}`)
        .then((res)=>{
         setdados({ 
            tipo: res.data.tipo,
            imagem: res.data.imagem,
            descricao: res.data.descricao,
            preco: res.data.preco
          });
        });
       }, [])

       function enviandoAlteracao(e){
        e.preventDefault();
        alert('Dados enviados com sucesso!')
        axios.put(`https://fake-server-projetoindividual.onrender.com/produtos/${id}`, {
                    tipo: `${dados.tipo}`,
                    imagem: `${dados.imagem}`,
                    descricao: `${dados.descricao}`,
                    preco: `${dados.preco}`
                })
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                })
    }

  return (
    <form onSubmit = {enviandoAlteracao}>
        <Input type="text" text="Tipo de produto: " name="tipo" placeholder="Insira o tipo de produto" handleOnChange = {handleChange} value={dados.tipo} />
        <Input type="text" text="URL da imagem: " name="url_Imagem" placeholder="Insira a URL da imagem" handleOnChange = {handleChange} value={dados.imagem}/>
        <Input type="text" text="Descrião do produto: " name="descricao" placeholder="Insira da descricao do produto" handleOnChange = {handleChange} value={dados.descricao}/>
        <Input type="price" text="Valor do produto" name="preco" placeholder="Insira o valor do produto" handleOnChange = {handleChange} value={dados.preco}/>
        <BotaoSubmit text="Cadastrar Produto" />
   </form>
  )
}

export default EditProduto