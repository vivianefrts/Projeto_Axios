import axios from "axios";

import blogFetch from "../axios/config";

import {useState, useEffect} from 'react';

import {Link} from 'react-router-dom';

import "./Home.css"

const Home = () => {

  const [posts, setPosts] = useState([])
  const getPosts = async() => {
    try {
      const response = await blogFetch.get('');
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
            <Link to = {`/posts/${post.id}`} className="btn">Ler mais</Link>
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