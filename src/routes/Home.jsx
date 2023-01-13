import axios from "axios";

import {useState, useEffect} from 'react';

import {Link} from 'react-router-dom';

import "./Home.css"

const Home = () => {

  const [posts, setPosts] = useState([])
  const getPosts = async() => {
    try {
      const response = await axios.get('https://fake-server-projetoindividual.onrender.com/Produtos');
      const data = response.data;

      setPosts(data);
    } catch (error) {
      console.log(error)
    }
  } 

  useEffect(() => {
    getPosts()
  }, [])

  return <main className="home">
      <h1>Home</h1>
      {posts.length === 0 ? (<p>Carregando...</p>) : (
        posts.map((post) => (
          <div className="post" key={post.id}>
            <h2>{post.Categoria}</h2>
            <p>{post.Preço}</p>
            <Link to = {`/posts/${post.id}`}>Ler mais</Link>
          </div>
        ))
      )}
      <div className='container-carousel'>
        <div>

        </div>
      </div>
  </main>;
  
}
export default Home;